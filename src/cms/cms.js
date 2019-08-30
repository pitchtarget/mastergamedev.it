import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import BlendPagePreview from './preview-templates/BlendPagePreview'
import HistoryPagePreview from './preview-templates/HistoryPagePreview'
import CoffeePagePreview from './preview-templates/CoffeePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import BannersListPreview from './preview-templates/BannersListPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('blends', BlendPagePreview)
CMS.registerPreviewTemplate('history', HistoryPagePreview)
CMS.registerPreviewTemplate('good', CoffeePagePreview)
CMS.registerPreviewTemplate('excellent', CoffeePagePreview)
CMS.registerPreviewTemplate('best', CoffeePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('banners', BannersListPreview)
