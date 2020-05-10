import request from './request'

export function getCateData() {
  return request( {
    url: '/category'
  })
  }


export function getSubCategory(maitKey) {
  return request( {
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}