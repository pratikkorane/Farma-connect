import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'white' ? 'dark' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'white' ? 'dark' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://tse1.mm.bing.net/th?id=OIP.cGYE0VsGlKhGXleT8u30RgHaId&pid=Api&P=0&h=180" />
                                <p style={{ color: mode === 'white' ? 'dark' : '' }} className="leading-relaxed">Prathamesh Mali demonstrated a deep understanding of our brand and vision. They translated our ideas into a visually stunning and user-friendly website that exceeded our expectations. The attention to detail and creativity in the design process truly set them apart..</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'white' ? 'dark' : '' }} className="text-black-900 font-medium title-font tracking-wider text-sm uppercase">Prathamesh Mali</h2>
                                <p style={{ color: mode === 'white' ? 'dark' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-1">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://tse1.mm.bing.net/th?id=OIP.cGYE0VsGlKhGXleT8u30RgHaId&pid=Api&P=0&h=180" />
                                <p  style={{color: mode === 'white' ? 'dark' : ''}}className="leading-relaxed">"I had the opportunity to work with a talented student on a recent user interface design project. Their ability to conceptualize and implement a seamless user experience was truly commendable. The final product not only met our expectations but exceeded them, greatly enhancing our digital presence. I highly recommend this student for any UI design endeavor.".</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'white' ? 'dark' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rohan Chavan</h2>
                                <p style={{color: mode === 'white' ? 'dark' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div><div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://tse1.mm.bing.net/th?id=OIP.cGYE0VsGlKhGXleT8u30RgHaId&pid=Api&P=0&h=180" />
                                <p  style={{color: mode === 'dark' ? 'dark' : ''}}className="leading-relaxed">"Having a talented student on our team for the user interface design project made a significant impact. Their ability to translate complex ideas into an intuitive and visually appealing interface was impressive. The dedication to understanding user behavior and preferences was evident throughout the project. The contributions of this student greatly enhanced the overall user experience. I would enthusiastically recommend them for any UI design project."</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === '' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kiran Patil</h2>
                                <p style={{color: mode === 'dark' ? 'dark' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4 text-center "  style={{ marginLeft:"500px" }}> 
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="src\components\testimonial\korane.jpg" />
                                <p style={{color: mode === 'white' ? 'dark' : ''}} className="leading-relaxed">"I had the opportunity to work with a talented student on a recent user interface design project. Their ability to conceptualize and implement a seamless user experience was truly commendable. The final product not only met our expectations but exceeded them, greatly enhancing our digital presence. I highly recommend this student for any UI design endeavor".</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'white' ? 'dark' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Pratik Korane</h2>
                                <p  style={{color: mode === 'white' ? 'dark' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial