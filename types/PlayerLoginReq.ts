// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "PlayerLoginReq.proto" (syntax proto3)
// tslint:disable
//
// Sorapointa - A server software re-implementation for a certain anime game, and avoid sorapointa.
// Copyright (C) 2022  Sorapointa Team
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { AdjustTrackingInfo } from "./AdjustTrackingInfo";
import { TrackingIOInfo } from "./TrackingIOInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 156;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message PlayerLoginReq
 */
export interface PlayerLoginReq {
    /**
     * @generated from protobuf field: string device_uuid = 5;
     */
    deviceUuid: string;
    /**
     * @generated from protobuf field: uint32 target_uid = 10;
     */
    targetUid: number;
    /**
     * @generated from protobuf field: bytes extra_bin_data = 2046;
     */
    extraBinData: Uint8Array;
    /**
     * @generated from protobuf field: string platform = 4;
     */
    platform: string;
    /**
     * @generated from protobuf field: string checksum = 1334;
     */
    checksum: string;
    /**
     * @generated from protobuf field: uint32 channel_id = 1565;
     */
    channelId: number;
    /**
     * @generated from protobuf field: string client_verison_hash = 2040;
     */
    clientVerisonHash: string;
    /**
     * @generated from protobuf field: uint32 language_type = 11;
     */
    languageType: number;
    /**
     * @generated from protobuf field: uint32 client_data_version = 847;
     */
    clientDataVersion: number;
    /**
     * @generated from protobuf field: uint32 account_type = 7;
     */
    accountType: number;
    /**
     * @generated from protobuf field: string security_library_md5 = 868;
     */
    securityLibraryMd5: string;
    /**
     * @generated from protobuf field: string online_id = 577;
     */
    onlineId: string;
    /**
     * @generated from protobuf field: uint32 Unk3300_PMGFBMJNNCL = 82 [json_name = "Unk3300PMGFBMJNNCL"];
     */
    unk3300PMGFBMJNNCL: number;
    /**
     * @generated from protobuf field: string device_name = 12;
     */
    deviceName: string;
    /**
     * @generated from protobuf field: string birthday = 875;
     */
    birthday: string;
    /**
     * @generated from protobuf field: uint32 tag = 525;
     */
    tag: number;
    /**
     * @generated from protobuf field: string account_uid = 14;
     */
    accountUid: string;
    /**
     * @generated from protobuf field: string device_info = 15;
     */
    deviceInfo: string;
    /**
     * @generated from protobuf field: uint32 sub_channel_id = 1458;
     */
    subChannelId: number;
    /**
     * @generated from protobuf field: bool is_editor = 1;
     */
    isEditor: boolean;
    /**
     * @generated from protobuf field: string token = 8;
     */
    token: string;
    /**
     * @generated from protobuf field: uint32 reg_platform = 424;
     */
    regPlatform: number;
    /**
     * @generated from protobuf field: string checksum_client_version = 581;
     */
    checksumClientVersion: string;
    /**
     * @generated from protobuf field: uint32 Unk3300_OOBHAIIIPHH = 85 [json_name = "Unk3300OOBHAIIIPHH"];
     */
    unk3300OOBHAIIIPHH: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_NDLANBEIGEG = 1320 [json_name = "Unk3300NDLANBEIGEG"];
     */
    unk3300NDLANBEIGEG: number;
    /**
     * @generated from protobuf field: string country_code = 104;
     */
    countryCode: string;
    /**
     * @generated from protobuf field: uint32 gm_uid = 1790;
     */
    gmUid: number;
    /**
     * @generated from protobuf field: TrackingIOInfo tracking_io_info = 1713;
     */
    trackingIoInfo?: TrackingIOInfo;
    /**
     * @generated from protobuf field: bool is_transfer = 624;
     */
    isTransfer: boolean;
    /**
     * @generated from protobuf field: string security_library_version = 828;
     */
    securityLibraryVersion: string;
    /**
     * @generated from protobuf field: string client_version = 2;
     */
    clientVersion: string;
    /**
     * @generated from protobuf field: bool is_guest = 13;
     */
    isGuest: boolean;
    /**
     * @generated from protobuf field: string system_version = 6;
     */
    systemVersion: string;
    /**
     * @generated from protobuf field: uint32 target_home_owner_uid = 899;
     */
    targetHomeOwnerUid: number;
    /**
     * @generated from protobuf field: string psn_id = 1146;
     */
    psnId: string;
    /**
     * @generated from protobuf field: bytes security_cmd_reply = 874;
     */
    securityCmdReply: Uint8Array;
    /**
     * @generated from protobuf field: uint32 Unk3300_OFFHPAFIFGD = 1028 [json_name = "Unk3300OFFHPAFIFGD"];
     */
    unk3300OFFHPAFIFGD: number;
    /**
     * @generated from protobuf field: uint64 login_rand = 9;
     */
    loginRand: bigint;
    /**
     * @generated from protobuf field: AdjustTrackingInfo adjust_tracking_info = 64;
     */
    adjustTrackingInfo?: AdjustTrackingInfo;
    /**
     * @generated from protobuf field: bytes environment_error_code = 256;
     */
    environmentErrorCode: Uint8Array;
    /**
     * @generated from protobuf field: uint32 platform_type = 3;
     */
    platformType: number;
    /**
     * @generated from protobuf field: string cps = 1983;
     */
    cps: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class PlayerLoginReq$Type extends MessageType<PlayerLoginReq> {
    constructor() {
        super("PlayerLoginReq", [
            { no: 5, name: "device_uuid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "target_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2046, name: "extra_bin_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 4, name: "platform", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1334, name: "checksum", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1565, name: "channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2040, name: "client_verison_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "language_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 847, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "account_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 868, name: "security_library_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 577, name: "online_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 82, name: "Unk3300_PMGFBMJNNCL", kind: "scalar", jsonName: "Unk3300PMGFBMJNNCL", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "device_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 875, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 525, name: "tag", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "account_uid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "device_info", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1458, name: "sub_channel_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_editor", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 424, name: "reg_platform", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 581, name: "checksum_client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 85, name: "Unk3300_OOBHAIIIPHH", kind: "scalar", jsonName: "Unk3300OOBHAIIIPHH", T: 13 /*ScalarType.UINT32*/ },
            { no: 1320, name: "Unk3300_NDLANBEIGEG", kind: "scalar", jsonName: "Unk3300NDLANBEIGEG", T: 13 /*ScalarType.UINT32*/ },
            { no: 104, name: "country_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1790, name: "gm_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1713, name: "tracking_io_info", kind: "message", T: () => TrackingIOInfo },
            { no: 624, name: "is_transfer", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 828, name: "security_library_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "client_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "is_guest", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 6, name: "system_version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 899, name: "target_home_owner_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1146, name: "psn_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 874, name: "security_cmd_reply", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 1028, name: "Unk3300_OFFHPAFIFGD", kind: "scalar", jsonName: "Unk3300OFFHPAFIFGD", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "login_rand", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 64, name: "adjust_tracking_info", kind: "message", T: () => AdjustTrackingInfo },
            { no: 256, name: "environment_error_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "platform_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1983, name: "cps", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<PlayerLoginReq>): PlayerLoginReq {
        const message = { deviceUuid: "", targetUid: 0, extraBinData: new Uint8Array(0), platform: "", checksum: "", channelId: 0, clientVerisonHash: "", languageType: 0, clientDataVersion: 0, accountType: 0, securityLibraryMd5: "", onlineId: "", unk3300PMGFBMJNNCL: 0, deviceName: "", birthday: "", tag: 0, accountUid: "", deviceInfo: "", subChannelId: 0, isEditor: false, token: "", regPlatform: 0, checksumClientVersion: "", unk3300OOBHAIIIPHH: 0, unk3300NDLANBEIGEG: 0, countryCode: "", gmUid: 0, isTransfer: false, securityLibraryVersion: "", clientVersion: "", isGuest: false, systemVersion: "", targetHomeOwnerUid: 0, psnId: "", securityCmdReply: new Uint8Array(0), unk3300OFFHPAFIFGD: 0, loginRand: 0n, environmentErrorCode: new Uint8Array(0), platformType: 0, cps: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<PlayerLoginReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayerLoginReq): PlayerLoginReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string device_uuid */ 5:
                    message.deviceUuid = reader.string();
                    break;
                case /* uint32 target_uid */ 10:
                    message.targetUid = reader.uint32();
                    break;
                case /* bytes extra_bin_data */ 2046:
                    message.extraBinData = reader.bytes();
                    break;
                case /* string platform */ 4:
                    message.platform = reader.string();
                    break;
                case /* string checksum */ 1334:
                    message.checksum = reader.string();
                    break;
                case /* uint32 channel_id */ 1565:
                    message.channelId = reader.uint32();
                    break;
                case /* string client_verison_hash */ 2040:
                    message.clientVerisonHash = reader.string();
                    break;
                case /* uint32 language_type */ 11:
                    message.languageType = reader.uint32();
                    break;
                case /* uint32 client_data_version */ 847:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* uint32 account_type */ 7:
                    message.accountType = reader.uint32();
                    break;
                case /* string security_library_md5 */ 868:
                    message.securityLibraryMd5 = reader.string();
                    break;
                case /* string online_id */ 577:
                    message.onlineId = reader.string();
                    break;
                case /* uint32 Unk3300_PMGFBMJNNCL = 82 [json_name = "Unk3300PMGFBMJNNCL"];*/ 82:
                    message.unk3300PMGFBMJNNCL = reader.uint32();
                    break;
                case /* string device_name */ 12:
                    message.deviceName = reader.string();
                    break;
                case /* string birthday */ 875:
                    message.birthday = reader.string();
                    break;
                case /* uint32 tag */ 525:
                    message.tag = reader.uint32();
                    break;
                case /* string account_uid */ 14:
                    message.accountUid = reader.string();
                    break;
                case /* string device_info */ 15:
                    message.deviceInfo = reader.string();
                    break;
                case /* uint32 sub_channel_id */ 1458:
                    message.subChannelId = reader.uint32();
                    break;
                case /* bool is_editor */ 1:
                    message.isEditor = reader.bool();
                    break;
                case /* string token */ 8:
                    message.token = reader.string();
                    break;
                case /* uint32 reg_platform */ 424:
                    message.regPlatform = reader.uint32();
                    break;
                case /* string checksum_client_version */ 581:
                    message.checksumClientVersion = reader.string();
                    break;
                case /* uint32 Unk3300_OOBHAIIIPHH = 85 [json_name = "Unk3300OOBHAIIIPHH"];*/ 85:
                    message.unk3300OOBHAIIIPHH = reader.uint32();
                    break;
                case /* uint32 Unk3300_NDLANBEIGEG = 1320 [json_name = "Unk3300NDLANBEIGEG"];*/ 1320:
                    message.unk3300NDLANBEIGEG = reader.uint32();
                    break;
                case /* string country_code */ 104:
                    message.countryCode = reader.string();
                    break;
                case /* uint32 gm_uid */ 1790:
                    message.gmUid = reader.uint32();
                    break;
                case /* TrackingIOInfo tracking_io_info */ 1713:
                    message.trackingIoInfo = TrackingIOInfo.internalBinaryRead(reader, reader.uint32(), options, message.trackingIoInfo);
                    break;
                case /* bool is_transfer */ 624:
                    message.isTransfer = reader.bool();
                    break;
                case /* string security_library_version */ 828:
                    message.securityLibraryVersion = reader.string();
                    break;
                case /* string client_version */ 2:
                    message.clientVersion = reader.string();
                    break;
                case /* bool is_guest */ 13:
                    message.isGuest = reader.bool();
                    break;
                case /* string system_version */ 6:
                    message.systemVersion = reader.string();
                    break;
                case /* uint32 target_home_owner_uid */ 899:
                    message.targetHomeOwnerUid = reader.uint32();
                    break;
                case /* string psn_id */ 1146:
                    message.psnId = reader.string();
                    break;
                case /* bytes security_cmd_reply */ 874:
                    message.securityCmdReply = reader.bytes();
                    break;
                case /* uint32 Unk3300_OFFHPAFIFGD = 1028 [json_name = "Unk3300OFFHPAFIFGD"];*/ 1028:
                    message.unk3300OFFHPAFIFGD = reader.uint32();
                    break;
                case /* uint64 login_rand */ 9:
                    message.loginRand = reader.uint64().toBigInt();
                    break;
                case /* AdjustTrackingInfo adjust_tracking_info */ 64:
                    message.adjustTrackingInfo = AdjustTrackingInfo.internalBinaryRead(reader, reader.uint32(), options, message.adjustTrackingInfo);
                    break;
                case /* bytes environment_error_code */ 256:
                    message.environmentErrorCode = reader.bytes();
                    break;
                case /* uint32 platform_type */ 3:
                    message.platformType = reader.uint32();
                    break;
                case /* string cps */ 1983:
                    message.cps = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: PlayerLoginReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string device_uuid = 5; */
        if (message.deviceUuid !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.deviceUuid);
        /* uint32 target_uid = 10; */
        if (message.targetUid !== 0)
            writer.tag(10, WireType.Varint).uint32(message.targetUid);
        /* bytes extra_bin_data = 2046; */
        if (message.extraBinData.length)
            writer.tag(2046, WireType.LengthDelimited).bytes(message.extraBinData);
        /* string platform = 4; */
        if (message.platform !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.platform);
        /* string checksum = 1334; */
        if (message.checksum !== "")
            writer.tag(1334, WireType.LengthDelimited).string(message.checksum);
        /* uint32 channel_id = 1565; */
        if (message.channelId !== 0)
            writer.tag(1565, WireType.Varint).uint32(message.channelId);
        /* string client_verison_hash = 2040; */
        if (message.clientVerisonHash !== "")
            writer.tag(2040, WireType.LengthDelimited).string(message.clientVerisonHash);
        /* uint32 language_type = 11; */
        if (message.languageType !== 0)
            writer.tag(11, WireType.Varint).uint32(message.languageType);
        /* uint32 client_data_version = 847; */
        if (message.clientDataVersion !== 0)
            writer.tag(847, WireType.Varint).uint32(message.clientDataVersion);
        /* uint32 account_type = 7; */
        if (message.accountType !== 0)
            writer.tag(7, WireType.Varint).uint32(message.accountType);
        /* string security_library_md5 = 868; */
        if (message.securityLibraryMd5 !== "")
            writer.tag(868, WireType.LengthDelimited).string(message.securityLibraryMd5);
        /* string online_id = 577; */
        if (message.onlineId !== "")
            writer.tag(577, WireType.LengthDelimited).string(message.onlineId);
        /* uint32 Unk3300_PMGFBMJNNCL = 82 [json_name = "Unk3300PMGFBMJNNCL"]; */
        if (message.unk3300PMGFBMJNNCL !== 0)
            writer.tag(82, WireType.Varint).uint32(message.unk3300PMGFBMJNNCL);
        /* string device_name = 12; */
        if (message.deviceName !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.deviceName);
        /* string birthday = 875; */
        if (message.birthday !== "")
            writer.tag(875, WireType.LengthDelimited).string(message.birthday);
        /* uint32 tag = 525; */
        if (message.tag !== 0)
            writer.tag(525, WireType.Varint).uint32(message.tag);
        /* string account_uid = 14; */
        if (message.accountUid !== "")
            writer.tag(14, WireType.LengthDelimited).string(message.accountUid);
        /* string device_info = 15; */
        if (message.deviceInfo !== "")
            writer.tag(15, WireType.LengthDelimited).string(message.deviceInfo);
        /* uint32 sub_channel_id = 1458; */
        if (message.subChannelId !== 0)
            writer.tag(1458, WireType.Varint).uint32(message.subChannelId);
        /* bool is_editor = 1; */
        if (message.isEditor !== false)
            writer.tag(1, WireType.Varint).bool(message.isEditor);
        /* string token = 8; */
        if (message.token !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.token);
        /* uint32 reg_platform = 424; */
        if (message.regPlatform !== 0)
            writer.tag(424, WireType.Varint).uint32(message.regPlatform);
        /* string checksum_client_version = 581; */
        if (message.checksumClientVersion !== "")
            writer.tag(581, WireType.LengthDelimited).string(message.checksumClientVersion);
        /* uint32 Unk3300_OOBHAIIIPHH = 85 [json_name = "Unk3300OOBHAIIIPHH"]; */
        if (message.unk3300OOBHAIIIPHH !== 0)
            writer.tag(85, WireType.Varint).uint32(message.unk3300OOBHAIIIPHH);
        /* uint32 Unk3300_NDLANBEIGEG = 1320 [json_name = "Unk3300NDLANBEIGEG"]; */
        if (message.unk3300NDLANBEIGEG !== 0)
            writer.tag(1320, WireType.Varint).uint32(message.unk3300NDLANBEIGEG);
        /* string country_code = 104; */
        if (message.countryCode !== "")
            writer.tag(104, WireType.LengthDelimited).string(message.countryCode);
        /* uint32 gm_uid = 1790; */
        if (message.gmUid !== 0)
            writer.tag(1790, WireType.Varint).uint32(message.gmUid);
        /* TrackingIOInfo tracking_io_info = 1713; */
        if (message.trackingIoInfo)
            TrackingIOInfo.internalBinaryWrite(message.trackingIoInfo, writer.tag(1713, WireType.LengthDelimited).fork(), options).join();
        /* bool is_transfer = 624; */
        if (message.isTransfer !== false)
            writer.tag(624, WireType.Varint).bool(message.isTransfer);
        /* string security_library_version = 828; */
        if (message.securityLibraryVersion !== "")
            writer.tag(828, WireType.LengthDelimited).string(message.securityLibraryVersion);
        /* string client_version = 2; */
        if (message.clientVersion !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.clientVersion);
        /* bool is_guest = 13; */
        if (message.isGuest !== false)
            writer.tag(13, WireType.Varint).bool(message.isGuest);
        /* string system_version = 6; */
        if (message.systemVersion !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.systemVersion);
        /* uint32 target_home_owner_uid = 899; */
        if (message.targetHomeOwnerUid !== 0)
            writer.tag(899, WireType.Varint).uint32(message.targetHomeOwnerUid);
        /* string psn_id = 1146; */
        if (message.psnId !== "")
            writer.tag(1146, WireType.LengthDelimited).string(message.psnId);
        /* bytes security_cmd_reply = 874; */
        if (message.securityCmdReply.length)
            writer.tag(874, WireType.LengthDelimited).bytes(message.securityCmdReply);
        /* uint32 Unk3300_OFFHPAFIFGD = 1028 [json_name = "Unk3300OFFHPAFIFGD"]; */
        if (message.unk3300OFFHPAFIFGD !== 0)
            writer.tag(1028, WireType.Varint).uint32(message.unk3300OFFHPAFIFGD);
        /* uint64 login_rand = 9; */
        if (message.loginRand !== 0n)
            writer.tag(9, WireType.Varint).uint64(message.loginRand);
        /* AdjustTrackingInfo adjust_tracking_info = 64; */
        if (message.adjustTrackingInfo)
            AdjustTrackingInfo.internalBinaryWrite(message.adjustTrackingInfo, writer.tag(64, WireType.LengthDelimited).fork(), options).join();
        /* bytes environment_error_code = 256; */
        if (message.environmentErrorCode.length)
            writer.tag(256, WireType.LengthDelimited).bytes(message.environmentErrorCode);
        /* uint32 platform_type = 3; */
        if (message.platformType !== 0)
            writer.tag(3, WireType.Varint).uint32(message.platformType);
        /* string cps = 1983; */
        if (message.cps !== "")
            writer.tag(1983, WireType.LengthDelimited).string(message.cps);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerLoginReq
 */
export const PlayerLoginReq = new PlayerLoginReq$Type();
