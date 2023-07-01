function Footer() {
  var date = new Date().getFullYear();
  return (
    <div className="py-5 text-center">
      <p className="text-sm mt-2 opacity-50">
        &copy;{date} Gabriel Gatimu. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
