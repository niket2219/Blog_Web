import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import "./MainBlog.css";
const MainBlog = () => {
  const { mode, user, isAuthenticated } = useContext(Context);
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    const getSingleBlog = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/v1/blog/singleblog/${id}`,
          { withCredentials: true }
        );
        setBlog(data.blog);
        console.log(data.blog);
      } catch (error) {
        setBlog({});
        console.log(error);
      }
    };
    getSingleBlog();
  }, []);
  // if (!isAuthenticated) {
  //   return <Navigate to={"/"} />;
  // }

  return (
    <div className="Blogwalacontainer">
      <div class="singleblogcontainer">
        <div class="singlebloghero"></div>
        <main>
          <h2>Beauty of Nature</h2>
          <div class="singleblog-profile-container">
            <div class="singleblog-profile">
              {blog && blog.authorAvatar && (
                <div class="singleblog-img-container">
                  <img
                    src={blog.authorAvatar}
                    style={{
                      height: "98%",
                      width: "100%",
                      overflow: "hidden",
                    }}
                  ></img>
                </div>
              )}
              <div class="singleblog-text">
                <h1>{blog.authorName != null ? blog.authorName : "Unknown"}</h1>
                <p>January 4,2005</p>
              </div>
            </div>
            <div class="singleblog-button">
              <a href="" class="btn">
                {blog.category != null ? blog.category : "Random"}
              </a>
            </div>
          </div>
          <div class="singleblog-content">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              quam deserunt soluta porro exercitationem voluptates natus culpa
              tenetur suscipit alias sint dolorum molestiae dolor a enim
              sapiente, tempore delectus eligendi, fugit laborum quia?
              Perferendis laborum obcaecati ratione quaerat impedit, aperiam a
              beatae repudiandae adipisci, iure sed pariatur sunt illo, eius
              tempore facilis numquam est consectetur mollitia delectus
              voluptates magnam vero voluptatem dignissimos. Architecto delectus
              unde expedita. Obcaecati iste quaerat unde quibusdam quos
              distinctio! Deserunt laudantium dolore sit voluptate architecto
              minima!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              ullam voluptas nam assumenda, quis illum id natus quod ea
              asperiores corrupti animi molestias sed aperiam ipsa perferendis
              odio iure deserunt cum officiis? Tempora itaque quisquam veritatis
              iste est deserunt cupiditate sequi, reiciendis voluptatum suscipit
              qui nemo similique ab odit iure recusandae officiis rerum quos.
              Saepe provident error veniam sequi suscipit, commodi officia,
              aspernatur aliquid nisi possimus tempora cupiditate dicta id!
            </p>
            {blog && blog.mainImage && (
              <div class="singleblog-content-img-container">
                <img
                  src={blog.mainImage.url}
                  style={{ height: "98%", width: "100%", overflow: "hidden" }}
                ></img>
              </div>
            )}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              provident dignissimos esse totam quas? Animi, quod labore, ipsa
              adipisci eos cum voluptates corrupti excepturi molestias neque,
              voluptate quidem. Dolores asperiores, delectus suscipit non rerum
              ipsa facilis autem temporibus quis impedit sapiente minus
              assumenda tempora quam dolorum rem nam ducimus. Quos dicta facere
              illo. Voluptatibus quod illum quis atque delectus blanditiis
              omnis, quo excepturi consequatur suscipit fugit earum similique
              perferendis labore ullam consectetur saepe. Repudiandae placeat
              vitae expedita officiis reprehenderit, quae nesciunt quam
              assumenda ducimus dicta dolores laudantium architecto aliquam
              voluptates nostrum natus cum iure ipsum eos cupiditate maiores
              inventore alias!
            </p>
            <h4>Section 1.4.2 written and created by niket</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              architecto in odit nihil libero repellat veniam dolor placeat
              laboriosam at non laborum accusantium ipsa perspiciatis doloremque
              tempore corrupti quis tenetur iure optio, commodi culpa ullam
              dignissimos! Minima iste sit hic.
            </p>
            <div class="singleblog-content-img-container">
              <img
                src="../../../assets/767.jpg"
                style={{ height: "100%", width: "100%", overflow: "hidden" }}
              ></img>
            </div>
            <p>Blog Image Desk</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              quisquam dolores autem voluptates laborum voluptatibus, sequi quod
              quisquam dolores autem voluptates laborum voluptatibus, sequi quod
              quisquam dolores autem voluptates laborum voluptatibus, sequi quod
              exercitationem vel ipsum. Alias eligendi non possimus dolores!
            </p>
            <h4>Section 1.4.2 written and created by niket</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              soluta explicabo delectus? Natus, rem aspernatur culpa nostrum
              atque necessitatibus voluptates. Sunt, velit nobis? Rerum voluptas
              iure ex molestiae dolor dolores ea, officiis numquam at vitae
              veritatis dolore dolorum pariatur natus!
            </p>
            <blockquote>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              unde molestias excepturi vitae pariatur, temporibus quam sapiente
              molestias excepturi vitae pariatur, temporibus quam sapiente
              doloremque nesciunt a!
            </blockquote>
            <h4>Section 1.4.2 written and created by niket</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              assumenda, libero illo nulla iure delectus ipsum aut consequatur,
              accusamus, animi qui magnam dolorum et maiores ex illum
              reprehenderit cupiditate totam vitae. Neque doloribus explicabo
              quo quas soluta, laborum odit veritatis!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              assumenda, libero illo nulla iure delectus ipsum aut consequatur,
              accusamus, animi qui magnam dolorum et maiores ex illum
              reprehenderit cupiditate totam vitae. Neque doloribus explicabo
              quo accusamus, animi qui magnam dolorum et maiores ex illum
              reprehenderit cupiditate totam vitae. Neque doloribus explicabo
              quo quas soluta, laborum odit veritatis!
            </p>
          </div>
          <div class="singleblog-tags">
            <p></p>
            <a href="">web-design</a>
            <a href="">blogging</a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainBlog;
