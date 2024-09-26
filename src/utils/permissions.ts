/**
 * 检测是否有权限
 * @param value - 检测值
 * @param permissions - 权限
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const checkPermission = (value: string, permissions: string[]): boolean => {
	// if (!permissions || permissions.length === 0) return false;
	// return permissions.includes(value);
	//关闭页面权限校验
	return true;
};
