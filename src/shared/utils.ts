export const formatPhoneNumber = (phoneNumber: number) => {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}

export const formatDollarAmount = (amount: number) => {
  return '$' + amount.toFixed(2)
}

// convert a 24 hour time to 12 hour time
export function convertTime(time: number | string): string {
  const t = Number(time);
  if (time === 0) {
    return "12:00AM";
  } else if (t < 12) {
    return `${time}:00AM`;
  } else if (t === 12) {
    return "12:00PM";
  } else {
    return `${t - 12}:00PM`;
  }
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}