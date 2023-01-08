const { execSync } = require("child_process");

execSync(`chmod +x ./myapp.sh && ./myapp.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'db2b83bc-70b5-4ee7-bf2e-2644ff414dd3'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
