export type PersonnelRow = {
  name: string
  image: string
  consultationFee: string
  bio: string
  services: string
  paymentDetails: { bank: string; accountNo: string; sortCode: string }
  socials: { label: string; url: string }[]
}

function isValidImageUrl(value: string): boolean {
  return value.startsWith('http://') || value.startsWith('https://') || value.startsWith('/')
}

// Parses the full CSV text into rows, correctly handling quoted fields
// that contain commas OR newlines (e.g. multi-line bio/services cells).
function parseCSV(text: string): string[][] {
  const rows: string[][] = []
  let cols: string[] = []
  let current = ''
  let insideQuotes = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '"') {
      if (insideQuotes && next === '"') {
        // Escaped double-quote inside a quoted field
        current += '"'
        i++
      } else {
        insideQuotes = !insideQuotes
      }
    } else if (char === ',' && !insideQuotes) {
      cols.push(current.trim())
      current = ''
    } else if ((char === '\n' || (char === '\r' && next === '\n')) && !insideQuotes) {
      if (char === '\r') i++ // skip the \n of \r\n
      cols.push(current.trim())
      rows.push(cols)
      cols = []
      current = ''
    } else if (char === '\r' && !insideQuotes) {
      // lone \r treated as row end
      cols.push(current.trim())
      rows.push(cols)
      cols = []
      current = ''
    } else {
      // Inside a quoted field, replace newlines with a space to keep values single-line
      if ((char === '\n' || char === '\r') && insideQuotes) {
        current += ' '
        if (char === '\r' && next === '\n') i++
      } else {
        current += char
      }
    }
  }

  // Push the last field/row
  if (current.trim() !== '' || cols.length > 0) {
    cols.push(current.trim())
    rows.push(cols)
  }

  return rows
}

export async function getPersonnel(): Promise<PersonnelRow[]> {
  const SHEET_URL = process.env.GOOGLE_SHEET_CSV_URL

  if (!SHEET_URL) {
    console.error('GOOGLE_SHEET_CSV_URL is not set in environment variables.')
    return []
  }

  let text: string
  try {
    const res = await fetch(SHEET_URL, { cache: 'no-store' })
    if (!res.ok) {
      console.error(`Failed to fetch personnel sheet: ${res.status} ${res.statusText}`)
      return []
    }
    text = await res.text()
  } catch (err) {
    console.error('Network error fetching personnel sheet:', err)
    return []
  }

  const [_header, ...rows] = parseCSV(text.trim())

  return rows
    .filter((cols) => cols.some((c) => c !== ''))
    .map((cols) => {
      const [name,email,whatsapp, image, consultationFee, bio, services, bank, accountNo, sortCode, linkedin, youtube, instagram ] = cols

      const whatsappUrl = whatsapp && whatsapp !== ''
        ? (whatsapp.startsWith('http') ? whatsapp : `https://wa.me/${whatsapp.replace(/\D/g, '')}`)
        : ''
      const emailUrl = email && email !== '' ? `mailto:${email}` : ''

      return {
        name:            name            || 'Unknown',
        image:           isValidImageUrl(image ?? '') ? image : '',
        consultationFee: consultationFee || '',
        bio:             bio             || '',
        services:        services        || '',
        paymentDetails: {
          bank:     bank     || '',
          accountNo: accountNo || '',
          sortCode:  sortCode  || '',
        },
        socials: [
          ...(linkedin     && linkedin     !== '' ? [{ label: 'LinkedIn',  url: linkedin     }] : []),
          ...(youtube      && youtube      !== '' ? [{ label: 'YouTube',   url: youtube      }] : []),
          ...(instagram    && instagram    !== '' ? [{ label: 'Instagram', url: instagram    }] : []),
          ...(whatsappUrl  !== ''                 ? [{ label: 'WhatsApp', url: whatsappUrl   }] : []),
          ...(emailUrl     !== ''                 ? [{ label: 'Email',    url: emailUrl      }] : []),
        ],
      }
    })
    .filter((person) => person.name !== 'Unknown' && person.name !== '')
}
