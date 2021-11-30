# Send Mail

<p align="center">
  <a href="https://nodemailer.com/about/">
    <img alt="NodemailrIcon" src="https://repository-images.githubusercontent.com/1272424/d1995000-0ab7-11ea-8ed3-04a082c36b0d" width="150" />
  </a>
</p>

## **Nodemailer** - node js library for the ability to send mail to email

<br>

### **Library setup:**

1. **For Gmail users** - for a website to be able to send emails on your behalf, you need to give permission via the **[LINK](https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4MowTqgNL1yPY351L2AtC0VMhcKz8QaNy3jZjHAd5Ke8NY92zNzQYmSqXfEHCCJ_YN2hjPkH-sm4H488SfG-6cd_8pArA)**

2. **for users of other mailboxes** - this parameter is not needed

### **Verification:**

1. **To enter your mailbox** - create a file in the root of the project `.evn`

2. **In the file `.evn`** - add two entries as in the picture

    ![img](client/src/assets/img/help/envDemo.png)

> EMAIL=\<Your mail\>

> PASSWORD=\<Your password\>

> Be sure to be case sensitive!!!

<br>
<br>

# Build project

<p align="center">
  <a href="https://webpack.js.org/">
    <img alt="NodemailrIcon" src="https://habrastorage.org/webt/k-/tm/2g/k-tm2gvbb_ky6gdrd-tzqrzjkf4.png" width="150" />
  </a>
</p>


## **Webpack** - it is an open source JavaScript module builder

<br>

### **Sbokschik setting:**

1. **webpack.config.js** - collector config file

### **Uing terminal you can:**

- To build a project in the client-side development mode

  ```
  npm run webpackdev
  ```

1. To build the client side in production mode

    ```
    npm run webpackbuild
    ```

2. To build the client side with automatic server updates

    ```
    npm run webpackwatch
    ```

3. To run only the server side

    ```
    npm run serverstart
    ```

4. To automatically update the server side

    ```
    npm run serverwatch
    ```

5. To run the entire project in development mode

    ```
    npm run dev
    ```   

6. To run the entire project in production mode

    ```
    npm run prod
    ```

7. To get statistics of the project load

    ```
    npm run stats
    ```

<br>

> All these scripts are contained in the file `package.json`

> The project is launched on `localhost:5000`