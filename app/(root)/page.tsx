import { getServerSession } from 'next-auth/next';
import Link from 'next/link';
import { navigationLinks } from '@/constants';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';


const Home =async () => {
  const session=await getServerSession();
  return (
    <>
      <div className='h-[calc(100vh-112px)] border-2 overflow-auto flex flex-col'>
        <div className='welcome-text-container'>
          <span >Hello, <span className='welcome-username'>{session?.user?.name}</span>! choose one option: </span>
        </div>

        <div className='border-2 badges-container'>
          {navigationLinks.map((item)=>{
            return(
              <Badge className='m-2 py-2 px-4' key={item.label}>
                <Link href={item.route} key={item.label} className='pr-2'>
                  <span className='text-base'>{item.label}</span>
                </Link>
                <Image key={item.label}
                  src={item.imgURL}
                  alt="Badge icon" 
                  width={25} 
                  height={25}
                />
              </Badge>
              
            )            
          })}
        </div>
      </div>
      <section>
        <p>Ceva scris aiciS</p>
      </section>
    </>
    
    
  );
};

export default Home;
