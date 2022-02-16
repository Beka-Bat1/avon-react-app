/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { object, string } from "yup";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import emailjs from "@emailjs/browser";
import "./App.css";

export const numberRegex = /[0-9]+$/gi;

const userSchema = object({
  firstname: string()
    .required("აუცილებელი ველი")
    .min(3, "მინიმუმ 3 სიმბოლო")
    .max(20, "მაქსიმუმ 20 სიმბოლო"),
  lastname: string()
    .required("აუცილებელი ველი")
    .min(3, "მინიმუმ 3 სიმბოლო")
    .max(40, "მაქსიმუმ 40 სიმბოლო"),
  phone: string()
    .required("აუცილებელი ველი")
    .matches(numberRegex, {
      message: "შეიყვანე სწორი მობილურის ნომერი",
      excludeEmptyString: true,
    })
    .min(9, "შეიყვანე მინიმუმ 9 სიმბოლო"),
  email: string().required("აუცილებელი ველი").email("შეიყვანე სწორი მეილი"),
  region: string().min(3, "მიმუმ 3 სიმბოლო").max(40, "მაქსიმუმ 40 სიმბოლო"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      region: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          values,
          process.env.REACT_APP_USER_ID
        )
        .then(function (response) {
          alert("დიდი მადლობა! დაგიკავშირდებით უახლოეს მომავალში.");
          // console.log("SUCCESS!", response.status);
        })
        .catch((err) => {
          alert(
            "დროებით შეფერხებაა, გთხოვთ დაგვიკავშირდეთ სოციალური ქსელის საშუალებით."
          );
          // console.warn("FAILED...", error);
        });
    },
  });

  return (
    <app-root _nghost-ffy-c17="" ng-version="12.2.12">
      <app-header _ngcontent-ffy-c17="" _nghost-ffy-c6="">
        <main _ngcontent-ffy-c6="" className="header">
          <div _ngcontent-ffy-c6="" className="logoholder">
            <div _ngcontent-ffy-c6="" className="logo">
              <a _ngcontent-ffy-c6="" href="#">
                <img _ngcontent-ffy-c6="" src="./images/logo.svg" alt="" />
              </a>
            </div>
            <div _ngcontent-ffy-c6="" className="btn">
              <a _ngcontent-ffy-c6="" href="#form">
                <button _ngcontent-ffy-c6="" className="reg">
                  გახდი წარმომადგენელი
                </button>
              </a>
            </div>
          </div>
          <div _ngcontent-ffy-c6="" className="headerBTM"></div>
        </main>
      </app-header>
      <app-slider _ngcontent-ffy-c17="" _nghost-ffy-c13="">
        <main id="head" className="slider">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ display: "block" }}
            tabindex="0"
            aria-activedescendant="slide-ngb-slide-1"
          >
            <div role="tablist" class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>

            <div
              class="carousel-inner"
              id="slide-ngb-slide-0"
              style={{ maxHeight: "70vh" }}
            >
              {/* item one  */}
              <div
                role="tabpanel"
                className="carousel-item"
                id="slide-ngb-slide-0"
              >
                <div className="picsum-img-wrapper">
                  <img alt="Random first slide" src="./images/1.png" />
                </div>
              </div>

              {/* item one end */}

              {/* item two start */}
              <div
                role="tabpanel"
                className="carousel-item active"
                id="slide-ngb-slide-1"
              >
                <div className="picsum-img-wrapper">
                  <img alt="Random second slide" src="./images/2.png" />
                </div>
                <div className="carousel-caption">
                  <h3></h3>
                  <p></p>
                </div>
              </div>

              {/* item two end */}

              <div
                role="tabpanel"
                className="carousel-item"
                id="slide-ngb-slide-2"
              >
                <div className="picsum-img-wrapper">
                  <img
                    alt="Random third slide"
                    src="./images/3.png"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-caption">
                  <h3></h3>
                  <p></p>
                </div>
              </div>
              <div
                role="tabpanel"
                className="carousel-item"
                id="slide-ngb-slide-3"
              >
                <div className="picsum-img-wrapper">
                  <img
                    alt="Random fourth slide"
                    src="./images/4.png"
                    className="d-block w-100"
                  />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </main>
      </app-slider>

      <app-profit _ngcontent-ffy-c17="" _nghost-ffy-c7="">
        <main _ngcontent-ffy-c7="" className="profit">
          <div _ngcontent-ffy-c7="" className="profit-txt">
            <h1 _ngcontent-ffy-c7="">სპეციალურად შენთვის!</h1>
            <h4 _ngcontent-ffy-c7="">
              გაიცანი ახალი წარმომადგენლების განვითარების პროგრამა და მიიღე
              საჩუქრები თითოეულ საფეხურზე.
            </h4>
          </div>
          <div _ngcontent-ffy-c7="" className="profit-content">
            <div _ngcontent-ffy-c7="" className="card">
              <img
                _ngcontent-ffy-c7=""
                src="./images/card1-2.jpg"
                alt="..."
                className="card-img-top"
              />
              <div _ngcontent-ffy-c7="" className="card-body">
                <h5 _ngcontent-ffy-c7="" className="card-title">
                  საფეხური I
                </h5>
                <p _ngcontent-ffy-c7="" className="card-text">
                  განათავსე 49 ₾-დან 144.99 ₾-მდე <br _ngcontent-ffy-c7="" />
                  შეკვეთა და მიიღე <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">საჩუქარი 2 ლარად</b>
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">პროდუქტის ღირებულება 30 ₾</b>
                </p>
              </div>
            </div>
            <div _ngcontent-ffy-c7="" className="card">
              <img
                _ngcontent-ffy-c7=""
                src="./images/card1.jpg"
                alt="..."
                className="card-img-top"
              />
              <div _ngcontent-ffy-c7="" className="card-body">
                <h5 _ngcontent-ffy-c7="" className="card-title">
                  საფეხური I
                </h5>
                <p _ngcontent-ffy-c7="" className="card-text">
                  განათავსე 145 ₾ ან მეტი ოდენობის <br _ngcontent-ffy-c7="" />
                  შეკვეთა და მიიღე <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">საჩუქარი 7 ლარად</b>
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">პროდუქტის ღირებულება 45 ₾</b>
                </p>
              </div>
            </div>
            <div _ngcontent-ffy-c7="" className="card">
              <img
                _ngcontent-ffy-c7=""
                src="./images/card2.jpg"
                alt="..."
                className="card-img-top"
              />
              <div _ngcontent-ffy-c7="" className="card-body">
                <h5 _ngcontent-ffy-c7="" className="card-title">
                  საფეხური II
                </h5>
                <p _ngcontent-ffy-c7="" className="card-text">
                  განათავსე 185 ₾ ან მეტი ოდენობის <br _ngcontent-ffy-c7="" />
                  შეკვეთა და მიიღე <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">ნაკრები 7 ლარად</b>
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">პროდუქტის ღირებულება 55 ₾</b>
                </p>
              </div>
            </div>
            <div _ngcontent-ffy-c7="" className="card">
              <img
                _ngcontent-ffy-c7=""
                src="./images/card3.jpg"
                alt="..."
                className="card-img-top"
              />
              <div _ngcontent-ffy-c7="" className="card-body">
                <h5 _ngcontent-ffy-c7="" className="card-title">
                  საფეხური III
                </h5>
                <p _ngcontent-ffy-c7="" className="card-text">
                  განათავსე 225 ₾ ან მეტი ოდენობის <br _ngcontent-ffy-c7="" />
                  შეკვეთა და მიიღე <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">ნაკრები 7 ლარად</b>
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">პროდუქტის ღირებულება 65 ₾</b>
                </p>
              </div>
            </div>
            <div _ngcontent-ffy-c7="" className="card">
              <img
                _ngcontent-ffy-c7=""
                src="./images/card4.jpg"
                alt="..."
                className="card-img-top"
              />
              <div _ngcontent-ffy-c7="" className="card-body">
                <h5 _ngcontent-ffy-c7="" className="card-title">
                  საფეხური IV
                </h5>
                <p _ngcontent-ffy-c7="" className="card-text">
                  განათავსე 265 ₾ ან მეტი ოდენობის <br _ngcontent-ffy-c7="" />
                  შეკვეთა და მიიღე
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">ნაკრები 7 ლარად</b>
                  <br _ngcontent-ffy-c7="" />
                  <b _ngcontent-ffy-c7="">პროდუქტის ღირებულება 70 ₾</b>
                </p>
              </div>
            </div>
          </div>
          <div _ngcontent-ffy-c7="" className="button">
            <a _ngcontent-ffy-c7="" href="#" target="_blank">
              გაიგე მეტი
            </a>
          </div>
        </main>
      </app-profit>

      <app-register _ngcontent-ffy-c17="" _nghost-ffy-c8="">
        <main _ngcontent-ffy-c8="" id="register1" className="register">
          <div _ngcontent-ffy-c8="" className="formholder">
            <form
              _ngcontent-ffy-c8=""
              onSubmit={formik.handleSubmit}
              name="form"
              id="form"
            >
              <h4
                _ngcontent-ffy-c8=""
                style={{ color: "#495057", textAlign: "center" }}
              >
                შეავსე ფორმა, გახდი გამომწერი და მიიღე დამატებითი სარგებელი.
                <br _ngcontent-ffy-c8="" />
                <br _ngcontent-ffy-c8="" />
                გახდი წარმომადგენელი
              </h4>
              <div _ngcontent-ffy-c8="" className="form-group">
                <div _ngcontent-ffy-c8="" className="input-group">
                  <div _ngcontent-ffy-c8="" className="input-group-addon">
                    <span
                      _ngcontent-ffy-c8=""
                      aria-hidden="true"
                      className="glyphicon glyphicon-user"
                    ></span>
                  </div>
                  <input
                    _ngcontent-ffy-c8=""
                    type="text"
                    id="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange}
                    placeholder="სახელი"
                    className="form-control"
                    style={{
                      "background-image": `url(
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="
                      )`,
                      "background-repeat": "no-repeat",
                      "background-attachment": "scroll",
                      "background-size": "16px 18px",
                      "background-position": "98% 50%",
                      cursor: "auto",
                    }}
                  />
                </div>
              </div>
              {formik.touched.firstname && formik.errors.firstname ? (
                <div
                  style={{
                    color: "red",
                    marginLeft: "6%",
                    marginBottom: 20,
                  }}
                >
                  {formik.errors.firstname}
                </div>
              ) : null}
              <div _ngcontent-ffy-c8="" className="form-group">
                <div _ngcontent-ffy-c8="" className="input-group">
                  <div _ngcontent-ffy-c8="" className="input-group-addon">
                    <span
                      _ngcontent-ffy-c8=""
                      aria-hidden="true"
                      className="glyphicon glyphicon-user"
                    ></span>
                  </div>
                  <input
                    _ngcontent-ffy-c8=""
                    type="text"
                    id="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    placeholder="გვარი"
                    className="form-control"
                  />
                </div>
              </div>

              {formik.touched.lastname && formik.errors.lastname ? (
                <div
                  style={{ color: "red", marginLeft: "6%", marginBottom: 20 }}
                >
                  {formik.errors.lastname}
                </div>
              ) : null}
              <div _ngcontent-ffy-c8="" className="form-group">
                <div _ngcontent-ffy-c8="" className="input-group">
                  <div _ngcontent-ffy-c8="" className="input-group-addon">
                    <span
                      _ngcontent-ffy-c8=""
                      aria-hidden="true"
                      className="glyphicon glyphicon-earphone"
                    ></span>
                  </div>
                  <InputMask
                    mask="(+\9\95)99-999-999"
                    alwaysShowMask
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  >
                    {(inputProps) => (
                      <input
                        {...inputProps}
                        _ngcontent-ffy-c8=""
                        type="text"
                        id="phone"
                        placeholder="ტელეფონის ნომერი"
                        className="form-control"
                      />
                    )}
                  </InputMask>
                </div>
              </div>
              {formik.touched.phone && formik.errors.phone ? (
                <div
                  style={{ color: "red", marginLeft: "6%", marginBottom: 20 }}
                >
                  {formik.errors.phone}
                </div>
              ) : null}
              <div _ngcontent-ffy-c8="" className="form-group">
                <div _ngcontent-ffy-c8="" className="input-group">
                  <div _ngcontent-ffy-c8="" className="input-group-addon">
                    <span
                      _ngcontent-ffy-c8=""
                      aria-hidden="true"
                      className="glyphicon glyphicon-envelope"
                    ></span>
                  </div>
                  <input
                    _ngcontent-ffy-c8=""
                    type="text"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="ელ. ფოსტა"
                    className="form-control"
                  />
                </div>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div
                  style={{ color: "red", marginLeft: "6%", marginBottom: 20 }}
                >
                  {formik.errors.email}
                </div>
              ) : null}
              <div _ngcontent-ffy-c8="" className="form-group">
                <div _ngcontent-ffy-c8="" className="input-group">
                  <div _ngcontent-ffy-c8="" className="input-group-addon">
                    <span
                      _ngcontent-ffy-c8=""
                      aria-hidden="true"
                      className="glyphicon glyphicon-map-marker"
                    ></span>
                  </div>
                  <input
                    _ngcontent-ffy-c8=""
                    type="text"
                    id="region"
                    value={formik.values.region}
                    onChange={formik.handleChange}
                    placeholder="რეგიონი"
                    className="form-control"
                  />
                </div>
              </div>
              <p _ngcontent-ffy-c8="" className="grey">
                ამ განაცხადის წარდგენით ვადასტურებ, რომ გავეცანი
                <a
                  _ngcontent-ffy-c8=""
                  href="https://bit.ly/2WRO5FN"
                  target="_blank"
                  rel="noreferrer"
                >
                  კონფიდენციალურობის პოლიტიკას
                </a>
                და ვეთანხმები ჩემი პერსონალური მონაცემების გამოყენებას
              </p>
              <div _ngcontent-ffy-c8="" className="buttonHolder">
                <button
                  _ngcontent-ffy-c8=""
                  type="button"
                  id="submitForm"
                  onClick={formik.handleSubmit}
                  className="btn btn-default btn-lg btn-block button"
                >
                  გაგზავნა
                </button>
              </div>
            </form>
          </div>
        </main>
      </app-register>
      <app-brochure _ngcontent-ffy-c17="" _nghost-ffy-c14="">
        <main _ngcontent-ffy-c14="" className="tools">
          <div _ngcontent-ffy-c14="" className="ch">
            <div _ngcontent-ffy-c14="" className="aon">
              <div _ngcontent-ffy-c14="" className="text-logo">
                <div _ngcontent-ffy-c14="" className="logo">
                  <img _ngcontent-ffy-c14="" src="./images/aon.png" alt="" />
                </div>
                <div _ngcontent-ffy-c14="" className="text">
                  <h4 _ngcontent-ffy-c14="">
                    გადმოიწერე აპლიკაცია AVON ON, განათავსე პირველი შეკვეთა
                    აპლიკაციიდან და მიიღე დამატებითი შემოთავაზებები.
                  </h4>
                </div>
              </div>
              <div _ngcontent-ffy-c14="" className="downloadBTN">
                <div _ngcontent-ffy-c14="" className="android">
                  <a
                    _ngcontent-ffy-c14=""
                    href="https://www.ge.avon.com/REPSuite/static/com/landing/download.html"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    <img _ngcontent-ffy-c14="" src="./images/gp.png" alt="" />
                  </a>
                </div>
                <div _ngcontent-ffy-c14="" className="ios">
                  <a
                    _ngcontent-ffy-c14=""
                    href="https://www.ge.avon.com/REPSuite/static/com/landing/download.html"
                    target="_blank"
                    className="card-link"
                    rel="noreferrer"
                  >
                    <img _ngcontent-ffy-c14="" src="./images/as.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div _ngcontent-ffy-c14="" className="hr">
              <hr _ngcontent-ffy-c14="" />
            </div>
            <div _ngcontent-ffy-c14="" className="brochure">
              <div _ngcontent-ffy-c14="" className="text-logo">
                <div _ngcontent-ffy-c14="" className="text">
                  <h4 _ngcontent-ffy-c14="">
                    დაათვალიერე <br _ngcontent-ffy-c14="" />
                    ჩვენი ციფრული ბროშურა
                  </h4>
                  <div _ngcontent-ffy-c14="" className="button">
                    <a
                      _ngcontent-ffy-c14=""
                      href="https://my.avon.ge/brochure/imported"
                      target="_blank"
                      rel="noreferrer"
                    >
                      გახსენი კატალოგი
                    </a>
                  </div>
                </div>
                <div _ngcontent-ffy-c14="" className="logo">
                  <img
                    _ngcontent-ffy-c14=""
                    src="./images/C01.jpg"
                    alt=""
                    style={{
                      border: "1px solid #9d24ac",
                      borderRadius: "15px 0",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </app-brochure>
      <app-footer _ngcontent-ffy-c17="" _nghost-ffy-c15="">
        <main _ngcontent-ffy-c15="" className="footer">
          <div _ngcontent-ffy-c15="" className="logo">
            <img
              _ngcontent-ffy-c15=""
              src="./images/footer-logo.png"
              alt=""
              style={{ height: "50px" }}
            />
          </div>
        </main>
        <div _ngcontent-ffy-c15="" className="startup">
          <div _ngcontent-ffy-c15="" className="STc">
            <div _ngcontent-ffy-c15="" className="STc-left">
              <div _ngcontent-ffy-c15="" className="left-holder">
                <h4 _ngcontent-ffy-c15="">
                  Avon-ში თქვენ ისარგებლებთ საუკეთესო შემოთვაზებებით,
                  <br _ngcontent-ffy-c15="" />
                  გექნებათ განსაკუთრებული ფასდაკლება,
                  <br _ngcontent-ffy-c15="" />
                  საჩუქრები და აღიარება. <br _ngcontent-ffy-c15="" />
                  შენ გაქვს არჩევანის გაკეთების შესაძლებლობა:
                  <br _ngcontent-ffy-c15="" />
                  <br _ngcontent-ffy-c15="" />
                  <b _ngcontent-ffy-c15="">1.</b>
                  დარჩე მომხმარებლად (გამომწერი) და მიიღო
                  <a
                    _ngcontent-ffy-c15=""
                    href="https://drive.google.com/file/d/1XElm0tzjnfmh4oH90QhWDPk-XjEl9QAM/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    პროდუქტები ფასდაკლებით.
                  </a>
                  <br _ngcontent-ffy-c15="" />
                  <br _ngcontent-ffy-c15="" />
                  <b _ngcontent-ffy-c15="">2.</b>
                  აწარმოო ბიზნესი AVON-თან ერთად და მიიღო
                  <a
                    _ngcontent-ffy-c15=""
                    href="https://drive.google.com/file/d/1XElm0tzjnfmh4oH90QhWDPk-XjEl9QAM/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    + 3 % დამატებითი ფასდაკლება.
                  </a>
                  <br _ngcontent-ffy-c15="" />
                  <br _ngcontent-ffy-c15="" />
                  <b _ngcontent-ffy-c15="">3.</b>
                  გახდე სტარტაპერი და
                  <a
                    _ngcontent-ffy-c15=""
                    href="https://drive.google.com/file/d/1Xc4fECME33jXFmk6E9TvlAZryrVZovM-/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    დაიწყო ბიზნესი ინვესტიციის გარეშე.
                  </a>
                  <br _ngcontent-ffy-c15="" />
                  <br _ngcontent-ffy-c15="" />
                </h4>
              </div>
            </div>
            <div _ngcontent-ffy-c15="" className="Stc-right">
              <a
                _ngcontent-ffy-c15=""
                href="https://drive.google.com/file/d/10B4VL62bFILGIle6trT9JyjFv5I5m9no/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img _ngcontent-ffy-c15="" src="./images/startup.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </app-footer>
      <app-footer1 _ngcontent-ffy-c17="" _nghost-ffy-c5="">
        <main _ngcontent-ffy-c5="" className="footer1">
          <div _ngcontent-ffy-c5="" className="logof1">
            <img _ngcontent-ffy-c5="" src="./images/f-logo.svg" alt="" />
          </div>
          <div _ngcontent-ffy-c5="" className="bullets">
            <a
              _ngcontent-ffy-c5=""
              href="https://www.ge.avon.com/PRSuite/privacy_security.page"
              target="_blank"
              rel="noreferrer"
            >
              <p _ngcontent-ffy-c5="">კონფიდენციალურობის პოლიტიკა</p>
            </a>
          </div>
        </main>
      </app-footer1>
      <div>
        <main _ngcontent-ffy-c16="" className="footer2">
          <div _ngcontent-ffy-c16="" className="icons">
            <a
              _ngcontent-ffy-c16=""
              href="https://www.facebook.com/AvonGeorgia/"
              target={"_blank"}
              rel="noreferrer"
            >
              <img _ngcontent-ffy-c16="" src="./images/facebook.svg" alt="" />
            </a>
            <a
              _ngcontent-ffy-c16=""
              href="https://www.instagram.com/avon.georgia.official"
              target={"_blank"}
              rel="noreferrer"
            >
              <img _ngcontent-ffy-c16="" src="./images/instagram.svg" alt="" />
            </a>
            <a
              _ngcontent-ffy-c16=""
              href="https://www.youtube.com/user/AvonGeo"
              target={"_blank"}
              rel="noreferrer"
            >
              <img _ngcontent-ffy-c16="" src="./images/youtube.svg" alt="" />
            </a>
            <a
              _ngcontent-ffy-c16=""
              href="https://my.avon.ge/brochure/imported"
              target={"_blank"}
              rel="noreferrer"
            >
              <img _ngcontent-ffy-c16="" src="./images/imb.svg" alt="" />
            </a>
          </div>
          <div className="coporait">
            <p>@2022 AVON კოსმეტიკ საქართველო</p>
          </div>
        </main>
      </div>
    </app-root>
  );
}

export default App;
