import { MiddleBox, Paytmbox, Shopnow, Withdraw } from "./Navbar/style";
export const Middle1 = () => {
  return (
    <>
      <MiddleBox>
        <picture>
          <source
            srcset="https://www.mpl.live/cledge.mpl.live/pb/website/static/dd403537ac524fa4a64317c99562f103.webp"
            type="image/webp"
          />
          <source
            srcset="https://www.mpl.live/cledge.mpl.live/pb/website/static/dd403537ac524fa4a64317c99562f103.webp"
            type="image/png"
          />
          <img
            src="https://www.mpl.live/cledge.mpl.live/pb/website/static/dd403537ac524fa4a64317c99562f103.webp"
            alt="banner"
            className="bannerimg"
          />
        </picture>
        <div className="bannertext">
          <div className="bannertextcontainer">
            <div className="greyheader">
              <span>PLAY 60+ GAMES</span>
            </div>
            <div className="redheader">
              <span>₹5 Crores DAILY WINNINGS</span>
            </div>
            <div className="lightgrey">
              <span>PLAY ON INDIA'S LARGEST GAMING APP</span>
            </div>
          </div>
        </div>
        <div className="bannersmscontainer">
          <div>
            <div className="smsblock">
              <form className="smsformbox">
                <div className="inputbox">
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter Phone Number"
                    minLength="10"
                    maxLength="10"
                  />
                </div>
                <div className="getsms">
                  <input type="submit" value="Get SMS With Download Link" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </MiddleBox>
      <Withdraw>
        <h2 className="h2winnings">Withdraw Winnings With</h2>
      </Withdraw>
      <Paytmbox>
        <div className="paybox">
          <div className="payments">
            <div className="paymentsection">
              <div className="imgblock">
                <div className="datablock">
                  <img
                    src="https://www.mpl.live/static/withdraw/new-icons/paytm.png"
                    alt=""
                    className="datablockimg"
                  />
                  <p className="pbox">Paytm Wallet</p>
                </div>
              </div>
              <div className="imgblock">
                <div className="datablock">
                  <img
                    src="https://www.mpl.live/static/withdraw/new-icons/upi.png"
                    alt=""
                    className="datablockimg"
                  />
                  <p className="pbox">UPI</p>
                </div>
              </div>
              <div className="imgblock">
                <div className="datablock">
                  <img
                    src="https://www.mpl.live/static/withdraw/new-icons/amazon_pay.png"
                    alt=""
                    className="datablockimg"
                  />
                  <p className="pbox">Amazon Pay</p>
                </div>
              </div>
              <div className="imgblock">
                <div className="datablock">
                  <img
                    src="https://www.mpl.live/static/withdraw/new-icons/bank_transfer.png"
                    alt=""
                    className="datablockimg"
                  />
                  <p className="pbox">Bank Transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paytmbox>
      <Shopnow>
        <div className="shopcontent">
          <img
            src="https://www.mpl.live/static/banners/mplsports_desktop_widget.webp"
            alt=""
            className="shopimgbox"
          />
          <div className="shoptext">
            <div className="redheading">OWN THE</div>
            <div className="greyheading">
                  TEAM INDIA
            </div>
            <div className="greyheading">
                  JERSEY
            </div>
            <div className="shopclick">
                   SHOW NOW
            </div>
          </div>
        </div>
      </Shopnow>
    </>
  );
};
