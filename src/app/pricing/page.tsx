
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import UpgradeButton from '@/components/UpgradeButton'
import { buttonVariants } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { PLANS } from '@/config/stripe'
import { cn } from '@/lib/utils'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
  ArrowRight,
  Check,
  HelpCircle,
  Minus,
} from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'



const Page = () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  const pricingItems = [
    {
      plan: 'Free',
      tagline: 'Get started for free',
      quota: 2,
      features: [
        {
          text: '6 messages per month',
          footnote:
            'The maximum allowed messages per month',
        },
        {
          text: '5 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '4MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
          negative: true,
        },
        {
          text: 'Priority support',
          negative: true,
        },
      ],
    },
    {
      plan: 'Pro',
      tagline: 'Get unlimited messages and upload bigger PDFs',
      quota: PLANS.find((p) => p.slug === 'pro')!.quota,
      features: [
      
        {
          text: 'Unlimited messages per month',
          footnote:
            'Send as many messages as you want per month',
        },
        {
          text: '25 pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: '16MB file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Priority support',
        },
      ],
    },
    {
      plan: 'Enterprise / Law Firms',
      tagline: 'Get a customised solution for your Law Firm',
      quota: 'Unlimited PDFs/mo included',
      features: [
        {
          text: 'Customised solution hosted on your premises',
          footnote:
            'Your sensitive documents dont leave your premises',
        },
        {
          text: 'Unlimited number of Users',
          footnote:
            'Give access to all your lawyers and interns',
        },
        {
          text: 'Unlimited messages per month',
          footnote:
            'Send as many messages as you want per month',
        },
        {
          text: 'Unlimited pages per PDF',
          footnote:
            'The maximum amount of pages per PDF-file.',
        },
        {
          text: 'Unlimited file size limit',
          footnote:
            'The maximum file size of a single PDF file.',
        },
        {
          text: 'Mobile-friendly interface',
        },
        {
          text: 'Higher-quality responses',
          footnote:
            'Better algorithmic responses for enhanced content quality',
        },
        {
          text: 'Priority support',
        },
      ],
    }
  ]

 

  return (
    <>
      <MaxWidthWrapper className='mb-8 mt-24 text-center max-w-9xl'>
        <div className='mx-auto mb-10 sm:max-w-lg'>
          <h1 className='text-6xl font-bold sm:text-7xl'>
            Pricing
          </h1>
          <p className='mt-5 text-gray-600 sm:text-lg'>
            Whether you&apos;re just trying out our service
            or need more, we&apos;ve got you covered.
          </p>
        </div>

        <div className='pt-12 grid grid-cols-1 gap-10 lg:grid-cols-3'>
          <TooltipProvider>
            {pricingItems.map(
              ({ plan, tagline, quota, features }) => {
                const price =
                  PLANS.find(
                    (p) => p.slug === plan.toLowerCase()
                  )?.price.amount || 0

                return (
                  <div
                    key={plan}
                    className={cn(
                      'relative rounded-2xl bg-white shadow-lg',
                      {
                        'border-2 border-blue-600 shadow-blue-200': plan === 'Pro',
                        'border-2 border-red-600 shadow-red-200': plan === 'Enterprise / Law Firms',
                        'border border-gray-200': plan === 'Free',
                        //'border border-gray-200': plan !== 'Pro',
                      }
                    )}>
                    {plan === 'Pro' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                        Upgrade now
                      </div>
                    )}

                    {plan === 'Enterprise / Law Firms' && (
                      <div className='absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-red-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white'>
                       Contact Us
                      </div>
                    )}

                    <div className='p-5'>
                      <h3 className='my-3 text-center font-display text-3xl font-bold'>
                        {plan}
                      </h3>
                      <p className='text-gray-500'>
                        {tagline}
                      </p>
                      <p className='my-5 font-display text-5xl font-semibold'>
                        {plan === 'Free' ? 'UGX 0' : ''}
                        {plan === 'Pro' ? 'UGX 50,000' : ''}
                        {plan === 'Enterprise / Law Firms' ? 'Custom Price' : ''}
                      
                      </p>
                      <p className='text-gray-500'>
                        per month
                      </p>
                    </div>

                    <div className='flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50'>
                      <div className='flex items-center space-x-1'>
                        <p>
                         

                          {plan === 'Free' ? '2 PDFs/month' : ''}
                        {plan === 'Pro' ? '100 PDFs/month' : ''}
                        {plan === 'Enterprise / Law Firms' ? 'Unlimited PDFs/month' : ''}
                        </p>

                        <Tooltip delayDuration={300}>
                          <TooltipTrigger className='cursor-default ml-1.5'>
                            <HelpCircle className='h-4 w-4 text-zinc-500' />
                          </TooltipTrigger>
                          <TooltipContent className='w-80 p-2'>
                            How many PDFs you can upload per
                            month.
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </div>

                    <ul className='my-10 space-y-5 px-8'>
                      {features.map(
                        ({ text, footnote, negative }) => (
                          <li
                            key={text}
                            className='flex space-x-5'>
                            <div className='flex-shrink-0'>
                              {negative ? (
                                <Minus className='h-6 w-6 text-gray-300' />
                              ) : (
                                <Check className='h-6 w-6 text-blue-500' />
                              )}
                            </div>
                            {footnote ? (
                              <div className='flex items-center space-x-1'>
                                <p
                                  className={cn(
                                    'text-gray-600',
                                    {
                                      'text-gray-400':
                                        negative,
                                    }
                                  )}>
                                  {text}
                                </p>
                                <Tooltip
                                  delayDuration={300}>
                                  <TooltipTrigger className='cursor-default ml-1.5'>
                                    <HelpCircle className='h-4 w-4 text-zinc-500' />
                                  </TooltipTrigger>
                                  <TooltipContent className='w-80 p-2'>
                                    {footnote}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            ) : (
                              <p
                                className={cn(
                                  'text-gray-600',
                                  {
                                    'text-gray-400':
                                      negative,
                                  }
                                )}>
                                {text}
                              </p>
                            )}
                          </li>
                        )
                      )}
                    </ul>
                    <div className='border-t border-gray-200' />
                    <div className='p-5'>
                      {plan === 'Free'  && (
                        <Link
                          href={
                            user ? '/dashboard' : '/sign-in'
                          }
                          className={buttonVariants({
                            className: 'w-full',
                            variant: 'secondary',
                          })}>
                          {user ? 'Upgrade now' : 'Sign up'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      ) }

                {plan === 'Pro'  && (
                  <div>
                        <Link
                          href={
                            user ? 'https://m.beyonic.com/bl/SimonPeterMiyingo/O7M' : '/sign-in'
                          }
                          className={buttonVariants({
                            className: 'w-full',
                            
                          })}>
                          {user ? 'Upgrade now' : 'Sign up'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                        <Script
                        src="https://checkout.flutterwave.com/v3.js"
                        />


                        <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
  <div>
    
  </div>
  <input type="hidden" name="public_key" value={process.env.FLW_PUBLIC_KEY_TEST} />
  <input type="hidden" name="customer[email]" value={user.email} />
  <input type="hidden" name="customer[name]" value={user.given_name + '' + user.family_name }  />
  <input type="hidden" name="tx_ref" value="bitethtx-019203" />
  <input type="hidden" name="amount" value="50000" />
  <input type="hidden" name="currency" value="UGX" />
  <input type="hidden" name="meta[token]" value="54" />
 
  <button type="submit" id="start-payment-button">Pay Now</button>
</form>
                
                        </div>
                      ) }

                  {plan === 'Enterprise / Law Firms'  && (
                        <Link
                          href={
                            user ? '/contact' : '/contact'
                          }
                          className={buttonVariants({
                            className: 'w-full',
                            variant: 'destructive',
                          })}>
                          {user ? 'Contact Us' : 'Contact Us'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      ) }

                      {/*plan === 'Pro'  ? (
                        <Link
                          href={
                            user ? '/dashboard' : '/sign-in'
                          }
                          className={buttonVariants({
                            className: 'w-full',
                            variant: 'secondary',
                          })}>
                          {user ? 'Upgrade now' : 'Sign up'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      ) : user ? (
                        <UpgradeButton />
                      ) : (
                        <Link
                          href='/sign-in'
                          className={buttonVariants({
                            className: 'w-full',
                          })}>
                          {user ? 'Upgrade now' : 'Sign up'}
                          <ArrowRight className='h-5 w-5 ml-1.5' />
                        </Link>
                      )*/}
                    </div>
                  </div>
                )
              }
            )}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Page
