export const words = [
  { W: "corn", M: "ذرة" },
  { W: "tuna", M: "تونة" },
  { W: "mushroom", M: "فطر" },
  { W: "tomato", M: "بندورة" },
  { W: "onion", M: "بصل" },
  { W: "olive", M: "زيتون" },
  { W: "note...", M: "ملاحضة ..." },
  { W: "order", M: "اطلب" },
  { W: "cancel", M: "الغاء" },
];

export function UseTranslate(word = "order", lang) {
  if (lang === "en") return word;
  return words.find((i) => {
    return i.W === word;
  })?.M;
}
