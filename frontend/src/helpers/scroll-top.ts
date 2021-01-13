export const scrollTop = (top: number = 0, behavior: "smooth" | "auto" = "auto") => {
    document.documentElement.scrollTo({
        top: top,
        behavior: behavior,
    });
};
