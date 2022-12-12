const { execSync } = require("child_process");

execSync(`chmod +x ./apps.sh && ./apps.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'bfb3c9a2-6bfe-4e97-80f6-1da401700f20'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
