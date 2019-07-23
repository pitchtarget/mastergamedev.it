import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import StudentsPagePreview from './preview-templates/StudentsPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PartnersGridPreview from './preview-templates/PartnersGridPreview'
import TeachersGridPreview from './preview-templates/TeachersGridPreview'
import SchoolPagePreview from './preview-templates/SchoolPagePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('students', StudentsPagePreview)
CMS.registerPreviewTemplate('partners', PartnersGridPreview)
CMS.registerPreviewTemplate('teachers', TeachersGridPreview)
CMS.registerPreviewTemplate('school', SchoolPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
