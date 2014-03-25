var FirebaseMixin = {
  getInitialState: function() {
    return {};
  },
  componentWillMount: function() {
    this.firebase = new Firebase(this.props.url);
    this.firebase.on("value", function(snapshot) {
      this.replaceState(snapshot.val());
    }, function(err) {
      // Error.
    }, this);
  },
  componentWillUnmount: function() {
    this.firebase.off("value");
  }
};