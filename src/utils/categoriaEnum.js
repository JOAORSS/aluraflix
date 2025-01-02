export default function categoriaSolve(tag){

let tagTipo = {}
    
switch(tag){
    case 'frontend':
        tagTipo = {
            titulo: 'Front end',
            cor: 'var(--frontend)'
        }
        break;
    case 'backend':
        tagTipo = {
            titulo: 'Back end',
            cor: 'var(--backend)'
        }
        break;
    case 'mobile':
        tagTipo = {
            titulo: 'Mobile',
            cor: 'var(--mobile)'
        }
        break;
    default:
        tagTipo = {}
    }

    return tagTipo;
}