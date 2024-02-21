﻿-- Permissions
INSERT INTO users.[Permissions] ([Code], [Name]) VALUES
	-- Meetings
	('GetMeetingGroupProposals', 'GetMeetingGroupProposals'),
	('ProposeMeetingGroup', 'ProposeMeetingGroup'),
	('CreateNewMeeting','CreateNewMeeting'),
	('EditMeeting','EditMeeting'),
	('AddMeetingAttendee','AddMeetingAttendee'),
	('RemoveMeetingAttendee','RemoveMeetingAttendee'),
	('AddNotAttendee','AddNotAttendee'),
	('ChangeNotAttendeeDecision','ChangeNotAttendeeDecision'),
	('SignUpMemberToWaitlist','SignUpMemberToWaitlist'),
	('SignOffMemberFromWaitlist','SignOffMemberFromWaitlist'),
	('SetMeetingHostRole','SetMeetingHostRole'),
	('SetMeetingAttendeeRole','SetMeetingAttendeeRole'),
	('CancelMeeting','CancelMeeting'),
	('GetAllMeetingGroups','GetAllMeetingGroups'),
	('EditMeetingGroupGeneralAttributes','EditMeetingGroupGeneralAttributes'),
	('JoinToGroup','JoinToGroup'),
	('LeaveMeetingGroup','LeaveMeetingGroup'),
	('AddMeetingComment','AddMeetingComment'),
	('EditMeetingComment','EditMeetingComment'),
	('RemoveMeetingComment','RemoveMeetingComment'),
	('AddMeetingCommentReply','AddMeetingCommentReply'),
	('LikeMeetingComment','LikeMeetingComment'),
	('UnlikeMeetingComment','UnlikeMeetingComment'),
	('EnableMeetingCommenting','EnableMeetingCommenting'),
	('DisableMeetingCommenting','DisableMeetingCommenting'),
	('MyMeetingGroupsView','MyMeetingGroupsView'),
	('AllMeetingGroupsView','AllMeetingGroupsView'),
	('SubscriptionView','SubscriptionView'),
	('EmailsView','EmailsView'),
	('MyMeetingsView','MyMeetingsView'),
	('GetAuthenticatedMemberMeetings','GetAuthenticatedMemberMeetings'),

	-- Administration
	('AcceptMeetingGroupProposal','AcceptMeetingGroupProposal'),
	('AdministrationsView','AdministrationsView'),

	-- Payments
	('RegisterPayment','RegisterPayment'),
	('BuySubscription','BuySubscription'),
	('RenewSubscription','RenewSubscription'),
	('CreatePriceListItem','CreatePriceListItem'),
	('ActivatePriceListItem','ActivatePriceListItem'),
	('DeactivatePriceListItem','DeactivatePriceListItem'),
	('ChangePriceListItemAttributes','ChangePriceListItemAttributes'),
	('GetAuthenticatedPayerSubscription','GetAuthenticatedPayerSubscription'),
	('GetPriceListItem','GetPriceListItem')

-- Role To Permissions
---- Meetings
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetMeetingGroupProposals')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'ProposeMeetingGroup')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'CreateNewMeeting')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'EditMeeting')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'AddMeetingAttendee')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'RemoveMeetingAttendee')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'AddNotAttendee')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'ChangeNotAttendeeDecision')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'SignUpMemberToWaitlist')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'SignOffMemberFromWaitlist')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'SetMeetingHostRole')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'SetMeetingAttendeeRole')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'CancelMeeting')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetAllMeetingGroups')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'EditMeetingGroupGeneralAttributes')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'JoinToGroup')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'LeaveMeetingGroup')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'AddMeetingComment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'EditMeetingComment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'RemoveMeetingComment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'AddMeetingCommentReply')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'LikeMeetingComment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'UnlikeMeetingComment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetAuthenticatedMemberMeetingGroups')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetMeetingGroupDetails')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetMeetingDetails')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetMeetingAttendees')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'MyMeetingsGroupsView')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'SubscriptionView')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'EmailsView')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'AllMeetingGroupsView')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'MyMeetingsView')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetAuthenticatedMemberMeetings')

---- Administration
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'AcceptMeetingGroupProposal')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'AdministrationsView')

---- Payments
INSERT INTO users.RolesToPermissions VALUES ('Member', 'RegisterPayment')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'BuySubscription')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'RenewSubscription')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetAuthenticatedPayerSubscription')
INSERT INTO users.RolesToPermissions VALUES ('Member', 'GetPriceListItem')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'CreatePriceListItem')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'ActivatePriceListItem')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'DeactivatePriceListItem')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'ChangePriceListItemAttributes')
INSERT INTO users.RolesToPermissions VALUES ('Administrator', 'GetPriceListItem')