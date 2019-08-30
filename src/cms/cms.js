import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import BlendPagePreview from './preview-templates/BlendPagePreview'
import HistoryPagePreview from './preview-templates/HistoryPagePreview'
import ProgramPagePreview from './preview-templates/ProgramPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PartnersPagePreview from './preview-templates/PartnersPagePreview'
import TeachersPagePreview from './preview-templates/TeachersPagePreview'
import BannersListPreview from './preview-templates/BannersListPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blends', BlendPagePreview)
CMS.registerPreviewTemplate('partners', PartnersPagePreview)
CMS.registerPreviewTemplate('teachers', TeachersPagePreview)
CMS.registerPreviewTemplate('history', HistoryPagePreview)
CMS.registerPreviewTemplate('program', ProgramPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('banners', BannersListPreview)
