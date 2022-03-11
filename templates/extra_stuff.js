
/*<!--
    <!--
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Bootstrap
          </a>
        </div>
      </nav>
    -->
    <!--
      <center><a id="link-a" href="/admin">Log In</a></center>
      <hr>

        <style>
          /*
            table {
      table-layout: inherit;
     /* width: 100%;
      border-collapse: collapse;
     /*  border: 3px solid rgb(108, 108, 108);  
    }

    thead th:nth-child(1) {
      width: 10%;
    }

    thead th:nth-child(2) {
      width: 10%;
    }

    thead th:nth-child(3) {
      width: 10%;
    }

    thead th:nth-child(4) {
      width: 70%;
    }

    th, td {
      padding: 10px;
    }
    /*
    tr{
        border-bottom: 1px solid #ddd;
    } /*

        </style>
      -->
    <!-- <h2>Testing</h2> -->
    <!--
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        -->
    <!--
      {% if user.is_authenticated %}

      <center><h5><strong>Hello, {{ user.username }}!</strong></h5></center>
      <center>



              <form action="/admin/logout/">

                  <div class="form-group">
                    <a class="btn btn-primary" href="/admin/logout" role="button">Log Out</a>
                   </div>
              </form>
              <hr>

              <form action="http://127.0.0.1:8000/admin/testing/reminder/add/">
                  <input type="submit" value="Add Another Reminder" />
              </form>
            -->
    <!--https://getbootstrap.com/docs/5.1/components/buttons/-->
    <!--

      <div class="form-group">
      <a class="btn btn-primary" href="/admin" role="button">Admin</a>
     </div>
     <div class="form-group">
      <a class="btn btn-primary" href="#messages" role="button">Messages</a>
     </div>
     <div class="form-group">
      <a class="btn btn-primary" href="#availabilitys" role="button">Availabilitys</a>
     </div>
     <div class="form-group">
      <a class="btn btn-primary" href="#" role="button">Assignments</a>
     </div>
     <div class="form-group">
      <a class="btn btn-primary" href="#" role="button">Drive Uploaders</a>
     </div>
    -->
    <hr>
    <!--
              <div class="form-group">
               <a class="btn btn-primary" href="#" role="button">Users</a>
               </div>

               <div class="form-group">
                <a class="btn btn-primary" href="#" role="button">Groups</a>
                </div>

                <div class="form-group">
                  <a class="btn btn-primary" href="#" role="button">Document Uploader</a>
                 </div>
                 <div class="form-group">
                  <a class="btn btn-primary" href="#" role="button">Statuses</a>
                 </div>

                 <div class="form-group">
                  <a class="btn btn-primary" href="http://127.0.0.1:8000/admin/testing/reminder/add/" role="button" disabled="disabled" >Direct - Add Another Reminder</a>
                 </div>

                 <div class="form-group">
                  <a class="btn btn-primary" href="#Reminders" role="button">Add Another Reminder</a>
                 </div>
                 <hr>

        </center>

        {% endif %}
      
    {% if user.is_authenticated %}

    <center>
        <!-- <img src="C:\Users\lunas\source\repos\didactic-waddle\progress\templates\progress\pic2" alt="logo2" height="540" width="960"> 
        <h4 id="messages">Messages:</h4>
        <small>(If too many, delete old ones. Click <a id="link-a" href="admin/progress/message/add">here</a> to reply to a message.) </small>
    </center>
    {% for obj in messages %}
    <center>

        <table width="95%">
            <ol>
                <hr>
            <tr>
                <th width="5%">To:</th>
                <th width="5%">From:</th>
                <th width="68%">Message:</th>
                <th width="35%">Posted At:</th>
            </tr>
            <tr>
                <td width="5%" style="color:rgb(25, 155, 25);"><strong>{{obj.To}}</strong></td>
                <td width="5%" style="color:rgb(25, 155, 25);"><strong>{{obj.From}}</strong></td>
                <td width="68%">{{obj.Message}}<br></td>
                <td width="35%">{{obj.Posted_At}}</td>

        </table>

        </ol>


    </center>
    {% endfor %}


    <hr>
    <center>
        <h4 id="availabilitys">Availabilitys:</h4>
        <small>( Click <a id="link-a" href="admin/progress/availability/">here</a> to change availability status.) </small>
    </center>
    {% for obj in availabilitys %}
    <center>

        <table width="95%">
            <ol>
                <hr>
            <tr>
                <th width="10%">Name:</th>
                <th width="10%">Available?</th>
                <th width="10%">On Docs?</th>
                <th width="40%">Notes:</th>
                <th width="20%">Updated At:</th>
            </tr>
            <tr>
                <strong>
                <td width="10%" style="color:rgb(25, 155, 25);"><strong>{{obj.Name}}</strong></td></strong>

                <strong>
                <td width="10%" style="color: rgb(0, 255, 247);"><strong>{{obj.Available}}</strong></td></strong>
                <strong>
                <td width="10%" style="color:rgb(0, 255, 250);"><strong>{{obj.On_Docs}}</strong></td></strong>
                <td width="40%">{{obj.Notes}}</td>
                <td width="20%">{{obj.Updated_at}}</td>

        </table>

        </ol>
        <!-- deleting::: https://www.youtube.com/watch?v=3VBHWLFza4s

    </center>









    <!--
        {% for obj in Assignments %}
        <center>

        <table width="95%">
            <ol>
            <hr>
            <tr>
              <th width="10%">Name:</th>
              <th  width="10%">Available?</th>
              <th width="10%">On Docs?</th>
              <th  width="40%">Notes:</th>
              <th  width="20%">Updated At:</th>
            </tr>
            <tr>
              <strong><td width="10%" style="color:rgb(25, 155, 25);"><strong>{{obj.Name}}</strong></td></strong>

              <strong><td  width="10%" style="color: rgb(0, 255, 247);"><strong>{{obj.Available}}</strong></td></strong>
              <strong><td width="10%" style="color:rgb(0, 255, 250);"  ><strong>{{obj.On_Docs}}</strong></td></strong>
              <td  width="40%">{{obj.Notes}}</td>
              <td  width="20%">{{obj.Updated_at}}</td>

          </table>

        </ol>

     deleting::: https://www.youtube.com/watch?v=3VBHWLFza4s

    </center>
        {% endfor %}
    -->
    <!--
    <ul>
        <li>
            <a href="/admin/uploader/document/add/"><button> upload</button></a>
             core is app name
    </li>
    </ul>
    -->
    <!--
    <hr>


        <h4 id="Reminders" style="text-align: center;">Reminders:</h4>
        <hr>
    -->

    <ul>
        <!--  # {% for obj in reminders %}
            <ul>
                <li><h6>{{ obj.Title }}</h6></li>
                <p5>Due At: {{ obj.Due_Date }}</p5>
                <ul>
                    <li> <small>Description:</small> </li>
                    <small>{{obj.Task}}</small>
                </ul>
                <hr>
            </ul>
          {% endfor %}
        
    </ul>

 -->
   */