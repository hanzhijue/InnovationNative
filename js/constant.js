/**
 * Global constant
 */

export const FETCH_STATUS_NEVER = Symbol('FETCH_STATUS_NEVER')
export const FETCH_STATUS_FETCHING = Symbol('FETCH_STATUS_FETCHING')
export const FETCH_STATUS_SUCCESS = Symbol('FETCH_STATUS_SUCCESS')
export const FETCH_STATUS_FAIL = Symbol('FETCH_STATUS_FAIL')

export const ATTACHMENT = {
  SORT_OLDEST_FIRST: Symbol('SORT_OLDEST_FIRST'),
  SORT_NEWEST_FIRST: Symbol('SORT_NEWEST_FIRST'),
  SORT_ATTACHMENT_AZ: Symbol('SORT_ATTACHMENT_AZ'),
  SORT_ATTACHMENT_ZA: Symbol('SORT_ATTACHMENT_ZA'),
  SORT_SMALLER_FIRST: Symbol('SORT_SMALLER_FIRST'),
  SORT_BIGGER_FIRST: Symbol('SORT_BIGGER_FIRST'),
  FILTER_ALL: Symbol('FILTER_ALL'),
  FILTER_IMAGES: Symbol('FILTER_IMAGES'),
  FILTER_DOCUMENTS: Symbol('FILTER_DOCUMENTS'),
  FILTER_AUDIOS: Symbol('FILTER_AUDIOS'),
  FILTER_VIDEOS: Symbol('FILTER_VIDEOS'),
  FILTER_ARCHIVES: Symbol('FILTER_ARCHIVES'),
}
