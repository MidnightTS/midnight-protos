// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "RegionInfo.proto" (syntax proto3)
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
import { ResVersionConfig } from "./ResVersionConfig";
/**
 * @generated from protobuf message RegionInfo
 */
export interface RegionInfo {
    /**
     * @generated from protobuf field: string gateserver_ip = 1;
     */
    gateserverIp: string;
    /**
     * @generated from protobuf field: uint32 gateserver_port = 2;
     */
    gateserverPort: number;
    /**
     * @generated from protobuf field: string pay_callback_url = 3;
     */
    payCallbackUrl: string;
    /**
     * @generated from protobuf field: string area_type = 7;
     */
    areaType: string;
    /**
     * @generated from protobuf field: string resource_url = 8;
     */
    resourceUrl: string;
    /**
     * @generated from protobuf field: string data_url = 9;
     */
    dataUrl: string;
    /**
     * @generated from protobuf field: string feedback_url = 10;
     */
    feedbackUrl: string;
    /**
     * @generated from protobuf field: string bulletin_url = 11;
     */
    bulletinUrl: string;
    /**
     * @generated from protobuf field: string resource_url_bak = 12;
     */
    resourceUrlBak: string;
    /**
     * @generated from protobuf field: string data_url_bak = 13;
     */
    dataUrlBak: string;
    /**
     * @generated from protobuf field: uint32 client_data_version = 14;
     */
    clientDataVersion: number;
    /**
     * @generated from protobuf field: string handbook_url = 16;
     */
    handbookUrl: string;
    /**
     * @generated from protobuf field: uint32 client_silence_data_version = 18;
     */
    clientSilenceDataVersion: number;
    /**
     * @generated from protobuf field: string client_data_md5 = 19;
     */
    clientDataMd5: string;
    /**
     * @generated from protobuf field: string client_silence_data_md5 = 20;
     */
    clientSilenceDataMd5: string;
    /**
     * @generated from protobuf field: ResVersionConfig res_version_config = 22;
     */
    resVersionConfig?: ResVersionConfig;
    /**
     * @generated from protobuf field: bytes secret_key = 23;
     */
    secretKey: Uint8Array;
    /**
     * @generated from protobuf field: string official_community_url = 24;
     */
    officialCommunityUrl: string;
    /**
     * @generated from protobuf field: string client_version_suffix = 26;
     */
    clientVersionSuffix: string;
    /**
     * @generated from protobuf field: string client_silence_version_suffix = 27;
     */
    clientSilenceVersionSuffix: string;
    /**
     * @generated from protobuf field: bool use_gateserver_domain_name = 28;
     */
    useGateserverDomainName: boolean;
    /**
     * @generated from protobuf field: string gateserver_domain_name = 29;
     */
    gateserverDomainName: string;
    /**
     * @generated from protobuf field: string user_center_url = 30;
     */
    userCenterUrl: string;
    /**
     * @generated from protobuf field: string account_bind_url = 31;
     */
    accountBindUrl: string;
    /**
     * @generated from protobuf field: string cdkey_url = 32;
     */
    cdkeyUrl: string;
    /**
     * @generated from protobuf field: string privacy_policy_url = 33;
     */
    privacyPolicyUrl: string;
    /**
     * @generated from protobuf field: string next_resource_url = 34;
     */
    nextResourceUrl: string;
    /**
     * @generated from protobuf field: ResVersionConfig next_res_version_config = 35;
     */
    nextResVersionConfig?: ResVersionConfig;
    /**
     * @generated from protobuf field: string game_biz = 36;
     */
    gameBiz: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegionInfo$Type extends MessageType<RegionInfo> {
    constructor() {
        super("RegionInfo", [
            { no: 1, name: "gateserver_ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "gateserver_port", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pay_callback_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "area_type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "resource_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "data_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "feedback_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "bulletin_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "resource_url_bak", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "data_url_bak", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "client_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 16, name: "handbook_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 18, name: "client_silence_data_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 19, name: "client_data_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 20, name: "client_silence_data_md5", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 22, name: "res_version_config", kind: "message", T: () => ResVersionConfig },
            { no: 23, name: "secret_key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 24, name: "official_community_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 26, name: "client_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 27, name: "client_silence_version_suffix", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 28, name: "use_gateserver_domain_name", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 29, name: "gateserver_domain_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 30, name: "user_center_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 31, name: "account_bind_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 32, name: "cdkey_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 33, name: "privacy_policy_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 34, name: "next_resource_url", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 35, name: "next_res_version_config", kind: "message", T: () => ResVersionConfig },
            { no: 36, name: "game_biz", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RegionInfo>): RegionInfo {
        const message = { gateserverIp: "", gateserverPort: 0, payCallbackUrl: "", areaType: "", resourceUrl: "", dataUrl: "", feedbackUrl: "", bulletinUrl: "", resourceUrlBak: "", dataUrlBak: "", clientDataVersion: 0, handbookUrl: "", clientSilenceDataVersion: 0, clientDataMd5: "", clientSilenceDataMd5: "", secretKey: new Uint8Array(0), officialCommunityUrl: "", clientVersionSuffix: "", clientSilenceVersionSuffix: "", useGateserverDomainName: false, gateserverDomainName: "", userCenterUrl: "", accountBindUrl: "", cdkeyUrl: "", privacyPolicyUrl: "", nextResourceUrl: "", gameBiz: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<RegionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegionInfo): RegionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string gateserver_ip */ 1:
                    message.gateserverIp = reader.string();
                    break;
                case /* uint32 gateserver_port */ 2:
                    message.gateserverPort = reader.uint32();
                    break;
                case /* string pay_callback_url */ 3:
                    message.payCallbackUrl = reader.string();
                    break;
                case /* string area_type */ 7:
                    message.areaType = reader.string();
                    break;
                case /* string resource_url */ 8:
                    message.resourceUrl = reader.string();
                    break;
                case /* string data_url */ 9:
                    message.dataUrl = reader.string();
                    break;
                case /* string feedback_url */ 10:
                    message.feedbackUrl = reader.string();
                    break;
                case /* string bulletin_url */ 11:
                    message.bulletinUrl = reader.string();
                    break;
                case /* string resource_url_bak */ 12:
                    message.resourceUrlBak = reader.string();
                    break;
                case /* string data_url_bak */ 13:
                    message.dataUrlBak = reader.string();
                    break;
                case /* uint32 client_data_version */ 14:
                    message.clientDataVersion = reader.uint32();
                    break;
                case /* string handbook_url */ 16:
                    message.handbookUrl = reader.string();
                    break;
                case /* uint32 client_silence_data_version */ 18:
                    message.clientSilenceDataVersion = reader.uint32();
                    break;
                case /* string client_data_md5 */ 19:
                    message.clientDataMd5 = reader.string();
                    break;
                case /* string client_silence_data_md5 */ 20:
                    message.clientSilenceDataMd5 = reader.string();
                    break;
                case /* ResVersionConfig res_version_config */ 22:
                    message.resVersionConfig = ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.resVersionConfig);
                    break;
                case /* bytes secret_key */ 23:
                    message.secretKey = reader.bytes();
                    break;
                case /* string official_community_url */ 24:
                    message.officialCommunityUrl = reader.string();
                    break;
                case /* string client_version_suffix */ 26:
                    message.clientVersionSuffix = reader.string();
                    break;
                case /* string client_silence_version_suffix */ 27:
                    message.clientSilenceVersionSuffix = reader.string();
                    break;
                case /* bool use_gateserver_domain_name */ 28:
                    message.useGateserverDomainName = reader.bool();
                    break;
                case /* string gateserver_domain_name */ 29:
                    message.gateserverDomainName = reader.string();
                    break;
                case /* string user_center_url */ 30:
                    message.userCenterUrl = reader.string();
                    break;
                case /* string account_bind_url */ 31:
                    message.accountBindUrl = reader.string();
                    break;
                case /* string cdkey_url */ 32:
                    message.cdkeyUrl = reader.string();
                    break;
                case /* string privacy_policy_url */ 33:
                    message.privacyPolicyUrl = reader.string();
                    break;
                case /* string next_resource_url */ 34:
                    message.nextResourceUrl = reader.string();
                    break;
                case /* ResVersionConfig next_res_version_config */ 35:
                    message.nextResVersionConfig = ResVersionConfig.internalBinaryRead(reader, reader.uint32(), options, message.nextResVersionConfig);
                    break;
                case /* string game_biz */ 36:
                    message.gameBiz = reader.string();
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
    internalBinaryWrite(message: RegionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string gateserver_ip = 1; */
        if (message.gateserverIp !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.gateserverIp);
        /* uint32 gateserver_port = 2; */
        if (message.gateserverPort !== 0)
            writer.tag(2, WireType.Varint).uint32(message.gateserverPort);
        /* string pay_callback_url = 3; */
        if (message.payCallbackUrl !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.payCallbackUrl);
        /* string area_type = 7; */
        if (message.areaType !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.areaType);
        /* string resource_url = 8; */
        if (message.resourceUrl !== "")
            writer.tag(8, WireType.LengthDelimited).string(message.resourceUrl);
        /* string data_url = 9; */
        if (message.dataUrl !== "")
            writer.tag(9, WireType.LengthDelimited).string(message.dataUrl);
        /* string feedback_url = 10; */
        if (message.feedbackUrl !== "")
            writer.tag(10, WireType.LengthDelimited).string(message.feedbackUrl);
        /* string bulletin_url = 11; */
        if (message.bulletinUrl !== "")
            writer.tag(11, WireType.LengthDelimited).string(message.bulletinUrl);
        /* string resource_url_bak = 12; */
        if (message.resourceUrlBak !== "")
            writer.tag(12, WireType.LengthDelimited).string(message.resourceUrlBak);
        /* string data_url_bak = 13; */
        if (message.dataUrlBak !== "")
            writer.tag(13, WireType.LengthDelimited).string(message.dataUrlBak);
        /* uint32 client_data_version = 14; */
        if (message.clientDataVersion !== 0)
            writer.tag(14, WireType.Varint).uint32(message.clientDataVersion);
        /* string handbook_url = 16; */
        if (message.handbookUrl !== "")
            writer.tag(16, WireType.LengthDelimited).string(message.handbookUrl);
        /* uint32 client_silence_data_version = 18; */
        if (message.clientSilenceDataVersion !== 0)
            writer.tag(18, WireType.Varint).uint32(message.clientSilenceDataVersion);
        /* string client_data_md5 = 19; */
        if (message.clientDataMd5 !== "")
            writer.tag(19, WireType.LengthDelimited).string(message.clientDataMd5);
        /* string client_silence_data_md5 = 20; */
        if (message.clientSilenceDataMd5 !== "")
            writer.tag(20, WireType.LengthDelimited).string(message.clientSilenceDataMd5);
        /* ResVersionConfig res_version_config = 22; */
        if (message.resVersionConfig)
            ResVersionConfig.internalBinaryWrite(message.resVersionConfig, writer.tag(22, WireType.LengthDelimited).fork(), options).join();
        /* bytes secret_key = 23; */
        if (message.secretKey.length)
            writer.tag(23, WireType.LengthDelimited).bytes(message.secretKey);
        /* string official_community_url = 24; */
        if (message.officialCommunityUrl !== "")
            writer.tag(24, WireType.LengthDelimited).string(message.officialCommunityUrl);
        /* string client_version_suffix = 26; */
        if (message.clientVersionSuffix !== "")
            writer.tag(26, WireType.LengthDelimited).string(message.clientVersionSuffix);
        /* string client_silence_version_suffix = 27; */
        if (message.clientSilenceVersionSuffix !== "")
            writer.tag(27, WireType.LengthDelimited).string(message.clientSilenceVersionSuffix);
        /* bool use_gateserver_domain_name = 28; */
        if (message.useGateserverDomainName !== false)
            writer.tag(28, WireType.Varint).bool(message.useGateserverDomainName);
        /* string gateserver_domain_name = 29; */
        if (message.gateserverDomainName !== "")
            writer.tag(29, WireType.LengthDelimited).string(message.gateserverDomainName);
        /* string user_center_url = 30; */
        if (message.userCenterUrl !== "")
            writer.tag(30, WireType.LengthDelimited).string(message.userCenterUrl);
        /* string account_bind_url = 31; */
        if (message.accountBindUrl !== "")
            writer.tag(31, WireType.LengthDelimited).string(message.accountBindUrl);
        /* string cdkey_url = 32; */
        if (message.cdkeyUrl !== "")
            writer.tag(32, WireType.LengthDelimited).string(message.cdkeyUrl);
        /* string privacy_policy_url = 33; */
        if (message.privacyPolicyUrl !== "")
            writer.tag(33, WireType.LengthDelimited).string(message.privacyPolicyUrl);
        /* string next_resource_url = 34; */
        if (message.nextResourceUrl !== "")
            writer.tag(34, WireType.LengthDelimited).string(message.nextResourceUrl);
        /* ResVersionConfig next_res_version_config = 35; */
        if (message.nextResVersionConfig)
            ResVersionConfig.internalBinaryWrite(message.nextResVersionConfig, writer.tag(35, WireType.LengthDelimited).fork(), options).join();
        /* string game_biz = 36; */
        if (message.gameBiz !== "")
            writer.tag(36, WireType.LengthDelimited).string(message.gameBiz);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionInfo
 */
export const RegionInfo = new RegionInfo$Type();