import { App } from '@digital-lib/react-digital';

export default function PagesApp(children: React.ReactNode) {
    /* TODO: 
        - Add parameter access to Puck schema upload/selection
        - Move react-digital-puck to pages app
    */
    return <App parameters={[]}>{children}</App>;
}
