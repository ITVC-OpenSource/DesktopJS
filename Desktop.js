class DesktopJS {
    constructor(obj) {
        if (obj !== undefined) {
            if (obj.theme !== undefined) {
                this.theme = obj.theme;
            } else {
                this.theme = "light";
            }
            if (obj.dir !== undefined) {
                this.dir = obj.dir;
            } else {
                this.dir = "ltr";
            }
        }
    }

    newWindow(obj) {
        if (typeof obj !== "object") {
            throw "Please make parameters object";
        } else {
            if (obj.jamyCode !== undefined) {
                let CJ = this.compileJamy(obj.jamyCode);
                let id = Math.random().toString(9).substr(2, 5);
                let win = document.createElement("div");
                win.classList.add("DesktopJS-window");
                win.classList.add(this.theme.toString());
                win.classList.add(this.dir.toString());
                win.classList.add("el-" + id.toString());
                if (CJ.properties.resizable !== undefined) {
                    if (CJ.properties.resizable !== "none") {
                        win.classList.add("resizable");
                    }
                }
                let width, height;
                if (obj.width !== undefined) {
                    width = obj.width;
                } else {
                    width = "250px";
                }
                if (obj.height !== undefined) {
                    height = obj.height;
                } else {
                    height = "250px";
                }
                //this.makeDraggable(id);
                win.style.width = width;
                win.style.height = height;
                if (obj.content === undefined) {
                    obj.content === "It's empty!!!";
                }
                win.innerHTML = `
                    <div class="BTNs">
                        <button class="closeButton" width="25px" height="25px" onclick="let desktop = new DesktopJS();desktop.close('${id}');">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775" width="15px" height="15px">
                                <path xmlns="http://www.w3.org/2000/svg" d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                            </svg>
                        </button>
                        <button class="minimizeButton" width="25px" height="25px" onclick="let desktop = new DesktopJS();desktop.minimize('${id}');">
                            <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                <path xmlns="http://www.w3.org/2000/svg" d="M438.8,199.8H73.2c-23.3,0-42.2,18.9-42.2,42.2v28.1c0,23.3,18.9,42.2,42.2,42.2h365.6c23.3,0,42.2-18.9,42.2-42.2v-28.1   C481,218.6,462.1,199.8,438.8,199.8z"/>
                            </svg>
                        </button>
                    </div>
                    <div class="inner">
                        ${obj.content}
                    </div>
                `;
                document.body.appendChild(win);
                return id;
            }
        }
    }

    close(element) {
        if (document.querySelector(".el-" + element) !== null) {
            document.querySelector(".el-" + element).remove();
        }
    }

    makeDraggable(id) {
        let elementSelector = ".el-" + id;
        var dragStartX, dragStartY;
        var objInitLeft, objInitTop;
        var inDrag = false;
        var dragTarget = document.querySelector(elementSelector);
        dragTarget.addEventListener("mousedown", function (e) {
            inDrag = true;
            objInitLeft = dragTarget.offsetLeft;
            objInitTop = dragTarget.offsetTop;
            dragStartX = e.pageX;
            dragStartY = e.pageY;
        });
        document.addEventListener("mousemove", function (e) {
            if (!inDrag) {
                return;
            }
            dragTarget.style.left = (objInitLeft + e.pageX - dragStartX) + "px";
            dragTarget.style.top = (objInitTop + e.pageY - dragStartY) + "px";
        });
        document.addEventListener("mouseup", function (e) {
            inDrag = false;
        });
    }

    minimize(element) {
        if (document.querySelector(".el-" + element) !== undefined) {
            document.querySelector(".el-" + element).style.display = "none";
        }
    }
}
