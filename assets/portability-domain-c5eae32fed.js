// Domain portability only. No content, booking or external-link changes.
const projectPrefix = "/yulia-ozdemir-site";
const pathname = globalThis.location.pathname;
export const siteBase = pathname === projectPrefix || pathname.startsWith(projectPrefix + "/")
  ? projectPrefix : "";
export function siteUrl(value) {
  return typeof value === "string" && (value === projectPrefix || value.startsWith(projectPrefix + "/"))
    ? siteBase + value.slice(projectPrefix.length) : value;
}
// A <base> must not move FAQ fragments away from the current page.
export function fragmentUrl(value) {
  return globalThis.location.pathname + globalThis.location.search + value;
}
