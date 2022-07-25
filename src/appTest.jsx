<div className="main-wrapper">
  <SidebarNav />
  <div className="page-wrapper">
    <div className="page-content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/allReferer" element={<Virality />} />
            <Route path="/currentReferer" element={<CurrentReferer />} />
            <Route path="/users" element={<Users />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/:userId" element={<SingleUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
    <Footer />
  </div>
</div>;
