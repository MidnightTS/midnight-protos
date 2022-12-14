// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MusicGameSettleReq.proto" (syntax proto3)
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
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 8998;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 *   IS_ALLOW_CLIENT = 1;
 * }
 *
 * @generated from protobuf message MusicGameSettleReq
 */
export interface MusicGameSettleReq {
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_MLLDAPCIDDO = 14 [json_name = "Unk3300MLLDAPCIDDO"];
     */
    unk3300MLLDAPCIDDO: number[];
    /**
     * @generated from protobuf field: repeated uint32 Unk3300_HHBCEPNLCLL = 1007 [json_name = "Unk3300HHBCEPNLCLL"];
     */
    unk3300HHBCEPNLCLL: number[];
    /**
     * @generated from protobuf field: bool Unk3300_DMLNKOLOAAH = 1984 [json_name = "Unk3300DMLNKOLOAAH"];
     */
    unk3300DMLNKOLOAAH: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_EBOJMGOCPLE = 82 [json_name = "Unk3300EBOJMGOCPLE"];
     */
    unk3300EBOJMGOCPLE: number;
    /**
     * @generated from protobuf field: uint32 max_combo = 10;
     */
    maxCombo: number;
    /**
     * @generated from protobuf field: bool is_save_score = 7;
     */
    isSaveScore: boolean;
    /**
     * @generated from protobuf field: float speed = 790;
     */
    speed: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MDHEJNFHBBI = 15 [json_name = "Unk3300MDHEJNFHBBI"];
     */
    unk3300MDHEJNFHBBI: number;
    /**
     * @generated from protobuf field: uint32 score = 8;
     */
    score: number;
    /**
     * @generated from protobuf field: bool Unk3300_BHIGAMNDFML = 291 [json_name = "Unk3300BHIGAMNDFML"];
     */
    unk3300BHIGAMNDFML: boolean;
    /**
     * @generated from protobuf field: uint32 correct_hit = 11;
     */
    correctHit: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_HEPJNCAOEMP = 1 [json_name = "Unk3300HEPJNCAOEMP"];
     */
    unk3300HEPJNCAOEMP: number;
    /**
     * @generated from protobuf field: uint32 combo = 4;
     */
    combo: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_IPODKENCAOK = 304 [json_name = "Unk3300IPODKENCAOK"];
     */
    unk3300IPODKENCAOK: number;
    /**
     * @generated from protobuf field: uint64 ugc_guid = 3;
     */
    ugcGuid: bigint;
    /**
     * @generated from protobuf field: uint32 Unk3300_AHAGHAHGPLD = 12 [json_name = "Unk3300AHAGHAHGPLD"];
     */
    unk3300AHAGHAHGPLD: number;
    /**
     * @generated from protobuf field: uint32 music_basic_id = 5;
     */
    musicBasicId: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_GJMIIDIOOMM = 1951 [json_name = "Unk3300GJMIIDIOOMM"];
     */
    unk3300GJMIIDIOOMM: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MusicGameSettleReq$Type extends MessageType<MusicGameSettleReq> {
    constructor() {
        super("MusicGameSettleReq", [
            { no: 14, name: "Unk3300_MLLDAPCIDDO", kind: "scalar", jsonName: "Unk3300MLLDAPCIDDO", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1007, name: "Unk3300_HHBCEPNLCLL", kind: "scalar", jsonName: "Unk3300HHBCEPNLCLL", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 1984, name: "Unk3300_DMLNKOLOAAH", kind: "scalar", jsonName: "Unk3300DMLNKOLOAAH", T: 8 /*ScalarType.BOOL*/ },
            { no: 82, name: "Unk3300_EBOJMGOCPLE", kind: "scalar", jsonName: "Unk3300EBOJMGOCPLE", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "max_combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "is_save_score", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 790, name: "speed", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 15, name: "Unk3300_MDHEJNFHBBI", kind: "scalar", jsonName: "Unk3300MDHEJNFHBBI", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 291, name: "Unk3300_BHIGAMNDFML", kind: "scalar", jsonName: "Unk3300BHIGAMNDFML", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "correct_hit", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "Unk3300_HEPJNCAOEMP", kind: "scalar", jsonName: "Unk3300HEPJNCAOEMP", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "combo", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 304, name: "Unk3300_IPODKENCAOK", kind: "scalar", jsonName: "Unk3300IPODKENCAOK", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "ugc_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 12, name: "Unk3300_AHAGHAHGPLD", kind: "scalar", jsonName: "Unk3300AHAGHAHGPLD", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "music_basic_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1951, name: "Unk3300_GJMIIDIOOMM", kind: "scalar", jsonName: "Unk3300GJMIIDIOOMM", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MusicGameSettleReq>): MusicGameSettleReq {
        const message = { unk3300MLLDAPCIDDO: [], unk3300HHBCEPNLCLL: [], unk3300DMLNKOLOAAH: false, unk3300EBOJMGOCPLE: 0, maxCombo: 0, isSaveScore: false, speed: 0, unk3300MDHEJNFHBBI: 0, score: 0, unk3300BHIGAMNDFML: false, correctHit: 0, unk3300HEPJNCAOEMP: 0, combo: 0, unk3300IPODKENCAOK: 0, ugcGuid: 0n, unk3300AHAGHAHGPLD: 0, musicBasicId: 0, unk3300GJMIIDIOOMM: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MusicGameSettleReq>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MusicGameSettleReq): MusicGameSettleReq {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 Unk3300_MLLDAPCIDDO = 14 [json_name = "Unk3300MLLDAPCIDDO"];*/ 14:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300MLLDAPCIDDO.push(reader.uint32());
                    else
                        message.unk3300MLLDAPCIDDO.push(reader.uint32());
                    break;
                case /* repeated uint32 Unk3300_HHBCEPNLCLL = 1007 [json_name = "Unk3300HHBCEPNLCLL"];*/ 1007:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.unk3300HHBCEPNLCLL.push(reader.uint32());
                    else
                        message.unk3300HHBCEPNLCLL.push(reader.uint32());
                    break;
                case /* bool Unk3300_DMLNKOLOAAH = 1984 [json_name = "Unk3300DMLNKOLOAAH"];*/ 1984:
                    message.unk3300DMLNKOLOAAH = reader.bool();
                    break;
                case /* uint32 Unk3300_EBOJMGOCPLE = 82 [json_name = "Unk3300EBOJMGOCPLE"];*/ 82:
                    message.unk3300EBOJMGOCPLE = reader.uint32();
                    break;
                case /* uint32 max_combo */ 10:
                    message.maxCombo = reader.uint32();
                    break;
                case /* bool is_save_score */ 7:
                    message.isSaveScore = reader.bool();
                    break;
                case /* float speed */ 790:
                    message.speed = reader.float();
                    break;
                case /* uint32 Unk3300_MDHEJNFHBBI = 15 [json_name = "Unk3300MDHEJNFHBBI"];*/ 15:
                    message.unk3300MDHEJNFHBBI = reader.uint32();
                    break;
                case /* uint32 score */ 8:
                    message.score = reader.uint32();
                    break;
                case /* bool Unk3300_BHIGAMNDFML = 291 [json_name = "Unk3300BHIGAMNDFML"];*/ 291:
                    message.unk3300BHIGAMNDFML = reader.bool();
                    break;
                case /* uint32 correct_hit */ 11:
                    message.correctHit = reader.uint32();
                    break;
                case /* uint32 Unk3300_HEPJNCAOEMP = 1 [json_name = "Unk3300HEPJNCAOEMP"];*/ 1:
                    message.unk3300HEPJNCAOEMP = reader.uint32();
                    break;
                case /* uint32 combo */ 4:
                    message.combo = reader.uint32();
                    break;
                case /* uint32 Unk3300_IPODKENCAOK = 304 [json_name = "Unk3300IPODKENCAOK"];*/ 304:
                    message.unk3300IPODKENCAOK = reader.uint32();
                    break;
                case /* uint64 ugc_guid */ 3:
                    message.ugcGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_AHAGHAHGPLD = 12 [json_name = "Unk3300AHAGHAHGPLD"];*/ 12:
                    message.unk3300AHAGHAHGPLD = reader.uint32();
                    break;
                case /* uint32 music_basic_id */ 5:
                    message.musicBasicId = reader.uint32();
                    break;
                case /* uint32 Unk3300_GJMIIDIOOMM = 1951 [json_name = "Unk3300GJMIIDIOOMM"];*/ 1951:
                    message.unk3300GJMIIDIOOMM = reader.uint32();
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
    internalBinaryWrite(message: MusicGameSettleReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated uint32 Unk3300_MLLDAPCIDDO = 14 [json_name = "Unk3300MLLDAPCIDDO"]; */
        if (message.unk3300MLLDAPCIDDO.length) {
            writer.tag(14, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300MLLDAPCIDDO.length; i++)
                writer.uint32(message.unk3300MLLDAPCIDDO[i]);
            writer.join();
        }
        /* repeated uint32 Unk3300_HHBCEPNLCLL = 1007 [json_name = "Unk3300HHBCEPNLCLL"]; */
        if (message.unk3300HHBCEPNLCLL.length) {
            writer.tag(1007, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.unk3300HHBCEPNLCLL.length; i++)
                writer.uint32(message.unk3300HHBCEPNLCLL[i]);
            writer.join();
        }
        /* bool Unk3300_DMLNKOLOAAH = 1984 [json_name = "Unk3300DMLNKOLOAAH"]; */
        if (message.unk3300DMLNKOLOAAH !== false)
            writer.tag(1984, WireType.Varint).bool(message.unk3300DMLNKOLOAAH);
        /* uint32 Unk3300_EBOJMGOCPLE = 82 [json_name = "Unk3300EBOJMGOCPLE"]; */
        if (message.unk3300EBOJMGOCPLE !== 0)
            writer.tag(82, WireType.Varint).uint32(message.unk3300EBOJMGOCPLE);
        /* uint32 max_combo = 10; */
        if (message.maxCombo !== 0)
            writer.tag(10, WireType.Varint).uint32(message.maxCombo);
        /* bool is_save_score = 7; */
        if (message.isSaveScore !== false)
            writer.tag(7, WireType.Varint).bool(message.isSaveScore);
        /* float speed = 790; */
        if (message.speed !== 0)
            writer.tag(790, WireType.Bit32).float(message.speed);
        /* uint32 Unk3300_MDHEJNFHBBI = 15 [json_name = "Unk3300MDHEJNFHBBI"]; */
        if (message.unk3300MDHEJNFHBBI !== 0)
            writer.tag(15, WireType.Varint).uint32(message.unk3300MDHEJNFHBBI);
        /* uint32 score = 8; */
        if (message.score !== 0)
            writer.tag(8, WireType.Varint).uint32(message.score);
        /* bool Unk3300_BHIGAMNDFML = 291 [json_name = "Unk3300BHIGAMNDFML"]; */
        if (message.unk3300BHIGAMNDFML !== false)
            writer.tag(291, WireType.Varint).bool(message.unk3300BHIGAMNDFML);
        /* uint32 correct_hit = 11; */
        if (message.correctHit !== 0)
            writer.tag(11, WireType.Varint).uint32(message.correctHit);
        /* uint32 Unk3300_HEPJNCAOEMP = 1 [json_name = "Unk3300HEPJNCAOEMP"]; */
        if (message.unk3300HEPJNCAOEMP !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300HEPJNCAOEMP);
        /* uint32 combo = 4; */
        if (message.combo !== 0)
            writer.tag(4, WireType.Varint).uint32(message.combo);
        /* uint32 Unk3300_IPODKENCAOK = 304 [json_name = "Unk3300IPODKENCAOK"]; */
        if (message.unk3300IPODKENCAOK !== 0)
            writer.tag(304, WireType.Varint).uint32(message.unk3300IPODKENCAOK);
        /* uint64 ugc_guid = 3; */
        if (message.ugcGuid !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.ugcGuid);
        /* uint32 Unk3300_AHAGHAHGPLD = 12 [json_name = "Unk3300AHAGHAHGPLD"]; */
        if (message.unk3300AHAGHAHGPLD !== 0)
            writer.tag(12, WireType.Varint).uint32(message.unk3300AHAGHAHGPLD);
        /* uint32 music_basic_id = 5; */
        if (message.musicBasicId !== 0)
            writer.tag(5, WireType.Varint).uint32(message.musicBasicId);
        /* uint32 Unk3300_GJMIIDIOOMM = 1951 [json_name = "Unk3300GJMIIDIOOMM"]; */
        if (message.unk3300GJMIIDIOOMM !== 0)
            writer.tag(1951, WireType.Varint).uint32(message.unk3300GJMIIDIOOMM);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MusicGameSettleReq
 */
export const MusicGameSettleReq = new MusicGameSettleReq$Type();
