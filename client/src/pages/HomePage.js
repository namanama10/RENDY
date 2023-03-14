import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsWhatsapp } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { BsArrowRight } from "react-icons/bs";
import GambarLogo from '../images/rendyLogo.jpg'
import Carousel from 'react-bootstrap/Carousel';
import GambarBanner1 from '../images/banner_2.jpg'
import GambarBanner2 from '../images/ThanitApril_32.jpg'
import GambarBanner3 from '../images/29966.jpg'

const HomePage = () => {
    // const [items, setItems] = useState([])
    //  useEffect(() => {
    //   getAllItems(result => setItems(result))
    //  }, [])
    
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      return (
        <>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='CaraoselCaption'>Menikmati liburan</h3>
          <p className='CaraoselCaption1'>Bersama teman & keluarga</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={GambarBanner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <div className='container'>
          <div className='header-sewaKendaraan'>
            <img src={GambarLogo} alt='' className='gambarLogo'/>
            <h5>RENTAL MOBIL ANDY</h5>
            <p>Memberikan kenyamanan perjalanan Anda. Tersedia berbagai tipe kendaraan dan harga yang terjangkau.</p>
          </div>
          <hr/>
          <div className='judul_list_kendaraan'>
            <h5>Pilih Kendaraan Favorit Anda</h5>
            <hr/>
          </div>
          <div className='List-kendaraan'>
          <div className='List-wrapper'>
              <img className='List-image' src="https://royaltour.id/wp-content/uploads/2020/11/rental-avanza.png"/>
              <div className='List-nama'>
                <p>Avanza</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = silver</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 7 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
            {/* list item ke 2 */}
            <div className='List-wrapper'>
              <img className='List-image' src="https://www.honda-indonesia.com/uploads/images/models/colors/csteel__1613396876715.png"/>
              <div className='List-nama'>
                <p>Brio RS M/T</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = Modern Steel Metallic</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 5 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
             {/* list item ke 3 */}
             <div className='List-wrapper'>
              <img className='List-image' src="https://asset.honda-indonesia.com/variants/images/JGJefbaqcZMw73rodNI9wxFlO8SJDX6lQXKwuYjc.png"/>
              <div className='List-nama'>
                <p>New Mobilio</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = taffeta white</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 7 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
            {/* list item ke 4 */}
            <div className='List-wrapper'>
              <img className='List-image' src="https://asset.honda-indonesia.com/colors/dsZxnQ9fIc8kLxmifK0ym84H22xwVJEDFllqJIL2.png"/>
              <div className='List-nama'>
                <p>WR-V</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = Ignite Red Metallic Two Tone (RS type only)</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 8 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
             {/* list item ke 5 */}
             <div className='List-wrapper'>
              <img className='List-image' src="https://www.toyota.astra.co.id/sites/default/files/2021-08/1-white.png"/>
              <div className='List-nama'>
                <p>NEW RUSH GR SPORT</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = putih</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 8 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
              {/* list item ke 6 */}
              <div className='List-wrapper'>
              <img className='List-image' src="https://ad-cms-headless.imgix.net/public/productvariant/1592549887497.png?w=531&h=auto&q=65&fm=webp&auto=format&fit=max&crop=center"/>
              <div className='List-nama'>
                <p>Ayla</p>
                </div>
              <div className='List-type_kendaraan'>Mobil</div>
              <div className='List-type_transmisi'>Transmisi = Manual</div>
              <div className='List-warna'>Warna = Red Solid</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 5 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
                 {/* list item ke 7 */}
                 <div className='List-wrapper'>
              <img className='List-image' src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-upload-3-5-28072021-020243.png"/>
              <div className='List-nama'>
                <p>Beat Deluxe</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = Silver</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
              {/* list item ke 8 */}
              <div className='List-wrapper'>
              <img className='List-image' src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/fa-thumbnail-400x300pxl-ys-6-26092022-105457.png"/>
              <div className='List-nama'>
                <p>Vario 125</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = Blue</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
             {/* list item ke 9 */}
             <div className='List-wrapper'>
              <img className='List-image' src="https://ik.imagekit.io/zlt25mb52fx/ahmcdn/tr:w-550,f-auto/uploads/product/thumbnail/honda-adv160-abs-red-sideview-27062027-01072022-042948.png"/>
              <div className='List-nama'>
                <p>ADV 160</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = Tough matte Red</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
              {/* list item ke 10 */}
              <div className='List-wrapper'>
              <img className='List-image' src="https://www.yamaha-motor.co.id/uploads/products/img360/all-new-nmax155-connected/32.png"/>
              <div className='List-nama'>
                <p>All New NMAX 155</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = Black</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
            {/* list item ke 11 */}
            <div className='List-wrapper'>
              <img className='List-image' src="https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022102623270093852M16291.png"/>
              <div className='List-nama'>
                <p>All New AEROX 155</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = Blue</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
             {/* list item ke 12 */}
             <div className='List-wrapper'>
              <img className='List-image' src="https://www.yamaha-motor.co.id/uploads/products/new_product_model_image/2022040513280656894H8051.png"/>
              <div className='List-nama'>
                <p>Lexi</p>
                </div>
              <div className='List-type_kendaraan'>Motor</div>
              <div className='List-type_transmisi'>Transmisi = Matic</div>
              <div className='List-warna'>Warna = White</div>
              <div className='List-kapasitas'>Kapasitas kendaraan = 2 orang</div>
              <hr/>
              <Button className='buttonInfo' variant="primary" onClick={handleShow}>
            Selengkapnya <BsArrowRight></BsArrowRight>
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pesan Sekarang</Modal.Title>
            </Modal.Header>
            <Modal.Body>Untuk Pemesanan & tarif harganya silahkan hubungi nomer dibawah ini !!! </Modal.Body>
            <Modal.Footer>
              <div className='badgeWa'>
              <h4>
               <Badge bg="success"><BsWhatsapp></BsWhatsapp> 08771234568 </Badge>
             </h4>
             </div>
            </Modal.Footer>
          </Modal>
            </div>
          </div>
        </div>
        </>
      )
    }

export default HomePage