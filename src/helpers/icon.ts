export const getIconURL = (name: string) => {
    return `/${name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")}.png`;
}