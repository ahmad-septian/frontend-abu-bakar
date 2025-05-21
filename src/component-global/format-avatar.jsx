function stringToColor(string) {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (let i = 0; i < 3; i++) {
    const raw = (hash >> (i * 8)) & 0xff;
    const limited = Math.floor(100 + (raw % 100));
    color += `00${limited.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringAvatar(name) {
  if (!name) {
    return {
      sx: {
        bgcolor: "#ccc", // fallback color
      },
      children: "?", // fallback character
    };
  }

  const nameParts = name.trim().split(" ");
  let initials = nameParts[0][0];

  if (nameParts.length > 1) {
    initials += nameParts[1][0];
  }

  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: initials.toUpperCase(),
  };
}
