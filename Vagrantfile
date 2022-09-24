Vagrant.configure(2) do |config|
  config.env.enable # enable plugin for reading local .env file

  config.vm.box = "ubuntu/jammy64"
  config.vm.synced_folder ".", "/home/personal-site/personal-site"

  config.vm.network "forwarded_port", guest: 80, host: 80
  config.vm.network "forwarded_port", guest: 443, host: 443

  config.vm.provision :ansible do |ansible|
    ansible.playbook = "ansible/playbook.development.yaml"
  end

  config.vm.provider "virtualbox" do |vb|
    vb.name = "personal-site"
    vb.memory = "1024" # match server ram
  end
end
