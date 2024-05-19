"use client";

export default function PostsSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}) {
  const handleCategoryChange = (category: string) => {
    onCategoryChange(category);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "News":
        return (
          <svg
            className="shrink-0 fill-teal-500/80"
            width={16}
            height={14}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 2h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 10h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2ZM15 14H1a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2ZM1.914 9.406l.626-1.409.015.003h4l.015-.003.626 1.409a1 1 0 1 0 1.828-.813L5.47.594a1.001 1.001 0 0 0-1.828 0l-3.556 8a1 1 0 1 0 1.828.812Zm2.642-5.945 1.128 2.538H3.428l1.128-2.538Z" />
          </svg>
        );
      case "Admin":
        return (
          <svg
            className="shrink-0 fill-teal-500/80"
            width={16}
            height={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.7 5.7 10.3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.6.6L2.7 6l-1-1c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.5 1.5 2.4 2.4L.6 14 2 15.4l3.7-3.7 4 4c.5.5 1.2.2 1.4 0 .4-.4.4-1 0-1.4l-1-1 3.7-6.7.6.6c.6.6 1.2.2 1.4 0 .3-.4.3-1.1-.1-1.5Zm-7.2 6.1L4.2 7.5l6.7-3.7 1.3 1.3-3.7 6.7Z" />
          </svg>
        );
      case "General":
        return (
          <svg
            className="shrink-0 fill-teal-500/80"
            width={16}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
          </svg>
        );
      case "Improvements":
        return (
          <svg
            className="shrink-0 fill-teal-500/80"
            width={16}
            height={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.707.293a1 1 0 0 0-1.414 0l-9 9a1 1 0 0 0-.273.507l-1 5a1 1 0 0 0 1.18 1.18l5-1a1 1 0 0 0 .51-.273l9-9a1 1 0 0 0 0-1.414l-4.003-4Zm-6.2 12.786-3.233.647.647-3.233L8 5.414 10.586 8l-5.08 5.079ZM12 6.586 9.414 4 11 2.414 13.586 5 12 6.586Z" />
          </svg>
        );
      case "Legal":
        return (
          <svg
            className="shrink-0 fill-teal-500/80"
            width={16}
            height={16}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.3 9.6c.6-4.6-3.2-8.5-7.8-7.9C4.5.4 2-.8.6.6c-1 1-.6 2.9.5 4.8-.5 1-.8 2.1-.8 3.3 0 3.9 3.2 7 7 7 1.2 0 2.3-.3 3.3-.8 1.5.8 3.6 1.7 4.8.5 1.1-1.1.7-3-1.1-5.8Zm-1.9-.9c0 1.5-.7 2.9-1.8 3.8C8.1 10.8 5.2 8 3.5 5.4c.9-1.1 2.3-1.8 3.8-1.8 2.8 0 5.1 2.3 5.1 5.1ZM2 2c.1-.1.7 0 1.9.5-.5.3-1 .7-1.5 1.1-.3-.9-.5-1.4-.4-1.6Zm.5 5.4c1.7 2.3 3.8 4.4 6.1 6.1-3.7 1-7.1-2.4-6.1-6.1Zm11.6 6.5c-.2.1-.8 0-1.7-.4.4-.4.8-.9 1.1-1.4.6 1.2.6 1.8.6 1.8Z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="mb-12 md:mb-0 md:w-[276px] md:mr-8 md:shrink-0 md:p-4">
      <div className="font-semibold text-xs text-gray-500/80 uppercase tracking-normal mb-3">
        Select category
      </div>
      <ul className="space-y-0.5">
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <a
                className={`flex items-center font-medium text-sm text-gray-800 dark:text-gray-200 px-4 h-9 space-x-4 transition-colors rounded-lg ${selectedCategory === category ? "bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 shadow shadow-black/5" : "hover:bg-teal-50/50 dark:hover:bg-gray-700/20"}`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category);
                }}
              >
                {getIcon(category)}
                <span>{category}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
