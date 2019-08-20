import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import StudentsPagePreview from './preview-templates/StudentsPagePreview'
import MasterPagePreview from './preview-templates/MasterPagePreview'
import ProgramPagePreview from './preview-templates/ProgramPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PartnersGridPreview from './preview-templates/PartnersGridPreview'
import TeachersGridPreview from './preview-templates/TeachersGridPreview'
import BannersListPreview from './preview-templates/BannersListPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('students', StudentsPagePreview)
CMS.registerPreviewTemplate('partners', PartnersGridPreview)
CMS.registerPreviewTemplate('teachers', TeachersGridPreview)
CMS.registerPreviewTemplate('master', MasterPagePreview)
CMS.registerPreviewTemplate('program', ProgramPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('banners', BannersListPreview)
