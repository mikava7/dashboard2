import  Styles  from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
export default function Page(){
        return (
                <div className={`${lusitana.className}`}>
                        <p className={Styles.shape }></p>
                        <p>Dashboard page</p>
                </div>
        )
        
}