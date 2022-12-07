// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "LanternRiteDoFireworksReformRsp.proto" (syntax proto3)
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
import { LanternRiteFireworksReformFactorInfo } from "./LanternRiteFireworksReformFactorInfo";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8171;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message LanternRiteDoFireworksReformRsp
 */
export interface LanternRiteDoFireworksReformRsp {
    /**
     * @generated from protobuf field: repeated LanternRiteFireworksReformFactorInfo factor_info_list = 6;
     */
    factorInfoList: LanternRiteFireworksReformFactorInfo[];
    /**
     * @generated from protobuf field: int32 retcode = 4;
     */
    retcode: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_BJHGCFANMBI = 12 [json_name = "Unk3300BJHGCFANMBI"];
     */
    unk3300BJHGCFANMBI: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_OMHPIGGDCBO = 10 [json_name = "Unk3300OMHPIGGDCBO"];
     */
    unk3300OMHPIGGDCBO: number;
    /**
     * @generated from protobuf field: uint32 challenge_id = 9;
     */
    challengeId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_LKOFBPDKEGG = 8 [json_name = "Unk3300LKOFBPDKEGG"];
     */
    unk3300LKOFBPDKEGG: number;
    /**
     * @generated from protobuf field: bool is_lucky = 1;
     */
    isLucky: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_LKKBPAJOCML = 14 [json_name = "Unk3300LKKBPAJOCML"];
     */
    unk3300LKKBPAJOCML: number;
    /**
     * @generated from protobuf field: uint32 stage_id = 15;
     */
    stageId: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class LanternRiteDoFireworksReformRsp$Type extends MessageType<LanternRiteDoFireworksReformRsp> {
    constructor() {
        super("LanternRiteDoFireworksReformRsp", [
            { no: 6, name: "factor_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LanternRiteFireworksReformFactorInfo },
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 12, name: "Unk3300_BJHGCFANMBI", kind: "scalar", jsonName: "Unk3300BJHGCFANMBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_OMHPIGGDCBO", kind: "scalar", jsonName: "Unk3300OMHPIGGDCBO", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "challenge_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_LKOFBPDKEGG", kind: "scalar", jsonName: "Unk3300LKOFBPDKEGG", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "is_lucky", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "Unk3300_LKKBPAJOCML", kind: "scalar", jsonName: "Unk3300LKKBPAJOCML", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "stage_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<LanternRiteDoFireworksReformRsp>): LanternRiteDoFireworksReformRsp {
        const message = { factorInfoList: [], retcode: 0, unk3300BJHGCFANMBI: 0, unk3300OMHPIGGDCBO: 0, challengeId: 0, unk3300LKOFBPDKEGG: 0, isLucky: false, unk3300LKKBPAJOCML: 0, stageId: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<LanternRiteDoFireworksReformRsp>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LanternRiteDoFireworksReformRsp): LanternRiteDoFireworksReformRsp {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated LanternRiteFireworksReformFactorInfo factor_info_list */ 6:
                    message.factorInfoList.push(LanternRiteFireworksReformFactorInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 Unk3300_BJHGCFANMBI = 12 [json_name = "Unk3300BJHGCFANMBI"];*/ 12:
                    message.unk3300BJHGCFANMBI = reader.uint32();
                    break;
                case /* uint32 Unk3300_OMHPIGGDCBO = 10 [json_name = "Unk3300OMHPIGGDCBO"];*/ 10:
                    message.unk3300OMHPIGGDCBO = reader.uint32();
                    break;
                case /* uint32 challenge_id */ 9:
                    message.challengeId = reader.uint32();
                    break;
                case /* uint32 Unk3300_LKOFBPDKEGG = 8 [json_name = "Unk3300LKOFBPDKEGG"];*/ 8:
                    message.unk3300LKOFBPDKEGG = reader.uint32();
                    break;
                case /* bool is_lucky */ 1:
                    message.isLucky = reader.bool();
                    break;
                case /* uint32 Unk3300_LKKBPAJOCML = 14 [json_name = "Unk3300LKKBPAJOCML"];*/ 14:
                    message.unk3300LKKBPAJOCML = reader.uint32();
                    break;
                case /* uint32 stage_id */ 15:
                    message.stageId = reader.uint32();
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
    internalBinaryWrite(message: LanternRiteDoFireworksReformRsp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated LanternRiteFireworksReformFactorInfo factor_info_list = 6; */
        for (let i = 0; i < message.factorInfoList.length; i++)
            LanternRiteFireworksReformFactorInfo.internalBinaryWrite(message.factorInfoList[i], writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, WireType.Varint).int32(message.retcode);
        /* uint32 Unk3300_BJHGCFANMBI = 12 [json_name = "Unk3300BJHGCFANMBI"]; */
        if (message.unk3300BJHGCFANMBI !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300BJHGCFANMBI);
        /* uint32 Unk3300_OMHPIGGDCBO = 10 [json_name = "Unk3300OMHPIGGDCBO"]; */
        if (message.unk3300OMHPIGGDCBO !== 0)
            writer.tag(10, WireType.Varint).uint32(message.unk3300OMHPIGGDCBO);
        /* uint32 challenge_id = 9; */
        if (message.challengeId !== 0)
            writer.tag(9, WireType.Varint).uint32(message.challengeId);
        /* uint32 Unk3300_LKOFBPDKEGG = 8 [json_name = "Unk3300LKOFBPDKEGG"]; */
        if (message.unk3300LKOFBPDKEGG !== 0)
            writer.tag(8, WireType.Varint).uint32(message.unk3300LKOFBPDKEGG);
        /* bool is_lucky = 1; */
        if (message.isLucky !== false)
            writer.tag(1, WireType.Varint).bool(message.isLucky);
        /* uint32 Unk3300_LKKBPAJOCML = 14 [json_name = "Unk3300LKKBPAJOCML"]; */
        if (message.unk3300LKKBPAJOCML !== 0)
            writer.tag(14, WireType.Varint).uint32(message.unk3300LKKBPAJOCML);
        /* uint32 stage_id = 15; */
        if (message.stageId !== 0)
            writer.tag(15, WireType.Varint).uint32(message.stageId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message LanternRiteDoFireworksReformRsp
 */
export const LanternRiteDoFireworksReformRsp = new LanternRiteDoFireworksReformRsp$Type();
