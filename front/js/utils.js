$(function(){
  try {
    make_hidden('btn_event','','proj');
  } catch( e ) {
    //window.alert( e.message );
  }
});

/**
 *  hidden属性を作成する
 *
 * @since     1.0
 * @param     string    name   名前
 * @param     string    value  値
 * @param     string    formname  フォーム名
 * @param     bool      override_flag=false 既にある存在するときはスキップする
 * @access    public
 * @return    bool
 */
function make_hidden(name, value, formname, override_flag=false) {
  var q = document.createElement('input');
  q.type = 'hidden';
  q.name = name;
  q.value = value;

  var form_dom;
  if (formname) {
    form_dom = document.forms[formname];
  } else {
    form_dom = document.forms[0];
  }

  if ( ! form_dom ) {
    d('FORMタグ(' + formname + ')が存在しません。');
    return false;
  }

  if ( ! override_flag ) {
    if (form_dom[name]) {
      d('フォーム(' + name + ')が既に存在するのでhiddenを作成しません。');
      return false;
    }
  }

  form_dom.appendChild(q);

  return true;
}
/**
 *  submitを実行する
 *
 * @since     1.0
 * @param     string    $url   submitを実行するURL
 * @access    public
 * @return    void
 */
function act( $url ) {
  this.document.proj.action = $url;
  this.document.proj.target = "_self";
  //this.document.proj.submit();
  return false;
}

  /**
   *
   *
   * @since     1.0
   * @param     string    $url   submitを実行するURL
   *            string    $btn_event   イベント名
   * @access    public
   * @return    void
   */
function act_event( $url, $btn_event ) {
  this.document.proj.btn_event.value = $btn_event;
  act($url);
  window.location.href = $url;

  return false;
}
