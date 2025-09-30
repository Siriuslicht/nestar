// import { ObjectId } from 'bson';
import { ObjectId } from 'bson';
export const availableAgentSorts = ['createAt', 'updateAt', 'memberViews', 'memberLikes', 'memberRank'];
export const availableMembersSorts = ['createAt', 'updateAt', 'memberViews', 'memberLikes'];

export const availableOptions = ['propertyBarter', 'propertyRent'];
export const availablePropertySorts = [
	'createAt',
	'updateAt',
	'propertyViews',
	'propertyLikes',
	'propertyRank',
	'propertyPrice',
];
export const availableBoardArticlesSorts = ['createdAt', 'updatedAt', 'articleLikes', 'articleViews'];

/* IMAGE CONFIGURATION */
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};

export const lookupMember = {
	$lookup: {
		from: 'members',
		localField: 'memberId',
		foreignField: '_id',
		as: 'memberData',
	},
};