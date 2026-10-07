const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDF0F6', 
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    backgroundColor: '#FDF0F6',
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D0A2E',
    fontFamily: 'serif',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D0A2E',
  },

  content: {
    padding: 20,
    gap: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D0A2E',
    fontFamily: 'serif',
  },

  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },

  button: {
    backgroundColor: '#7D0080',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2D0A2E',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  
  smallButton: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 65,
  },
  smallButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },


  menuContainer: {
    gap: 15,
  },
  largeButton: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 75,
  },
  menuIcon: {
    width: 36,
    textAlign: 'center',
  },
  buttonTextContainer: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  largeButtonTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  largeButtonSubtitle: {
    color: '#FFFFFF',
    fontSize: 11,
    opacity: 0.9,
    marginTop: 2,
  },

  
  bottomNav: {
    backgroundColor: '#FDF0F6',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  navItem: {
    alignItems: 'center',
    gap: 2,
  },
  navText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#2D0A2E',
  },
  activeNavText: {
    color: '#7D0080',
    borderBottomWidth: 2,
    borderBottomColor: '#7D0080',
  },
});