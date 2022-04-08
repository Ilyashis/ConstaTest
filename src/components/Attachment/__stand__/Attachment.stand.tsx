import { createStand } from '../../../stand/standConfig';
import Attachment from '../../../uiKit/components/ComponentsGridWithData/data/images/AttachmentImage';

export default createStand({
  title: 'Attachment',
  id: 'Attachment',
  group: 'components',
  image: Attachment,
  description: 'Показывает загрузку файла или уже загруженный файл.',
  version: '3.18.0',
  status: 'stable',
  sandbox:
    'https://codesandbox.io/embed/react-new?fontsize=14&hidenavigation=1&theme=dark',
  figma:
    'https://www.figma.com/embed?embed_host=uikit.consta.design&url=https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A16411',
  order: 10,
});
