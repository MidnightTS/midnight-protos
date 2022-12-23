// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "InBattleChessSettleInfo.proto" (syntax proto3)
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
import { ExhibitionDisplayInfo } from "./ExhibitionDisplayInfo";
/**
 * @generated from protobuf message InBattleChessSettleInfo
 */
export interface InBattleChessSettleInfo {
    /**
     * @generated from protobuf field: uint32 Unk3300_LPANFEBFJOJ = 5 [json_name = "Unk3300LPANFEBFJOJ"];
     */
    unk3300LPANFEBFJOJ: number;
    /**
     * @generated from protobuf field: uint64 scene_time_ms = 8;
     */
    sceneTimeMs: bigint;
    /**
     * @generated from protobuf field: uint32 Unk3300_NKHDFHAPNCN = 13 [json_name = "Unk3300NKHDFHAPNCN"];
     */
    unk3300NKHDFHAPNCN: number;
    /**
     * @generated from protobuf field: bool is_success = 6;
     */
    isSuccess: boolean;
    /**
     * @generated from protobuf field: uint32 Unk3300_EMNLLDJHMEI = 1 [json_name = "Unk3300EMNLLDJHMEI"];
     */
    unk3300EMNLLDJHMEI: number;
    /**
     * @generated from protobuf field: repeated ExhibitionDisplayInfo score_list = 4;
     */
    scoreList: ExhibitionDisplayInfo[];
    /**
     * @generated from protobuf field: uint32 Unk3300_IPGILJCBABK = 2 [json_name = "Unk3300IPGILJCBABK"];
     */
    unk3300IPGILJCBABK: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class InBattleChessSettleInfo$Type extends MessageType<InBattleChessSettleInfo> {
    constructor() {
        super("InBattleChessSettleInfo", [
            { no: 5, name: "Unk3300_LPANFEBFJOJ", kind: "scalar", jsonName: "Unk3300LPANFEBFJOJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "scene_time_ms", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 13, name: "Unk3300_NKHDFHAPNCN", kind: "scalar", jsonName: "Unk3300NKHDFHAPNCN", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_success", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_EMNLLDJHMEI", kind: "scalar", jsonName: "Unk3300EMNLLDJHMEI", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "score_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExhibitionDisplayInfo },
            { no: 2, name: "Unk3300_IPGILJCBABK", kind: "scalar", jsonName: "Unk3300IPGILJCBABK", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<InBattleChessSettleInfo>): InBattleChessSettleInfo {
        const message = { unk3300LPANFEBFJOJ: 0, sceneTimeMs: 0n, unk3300NKHDFHAPNCN: 0, isSuccess: false, unk3300EMNLLDJHMEI: 0, scoreList: [], unk3300IPGILJCBABK: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<InBattleChessSettleInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InBattleChessSettleInfo): InBattleChessSettleInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_LPANFEBFJOJ = 5 [json_name = "Unk3300LPANFEBFJOJ"];*/ 5:
                    message.unk3300LPANFEBFJOJ = reader.uint32();
                    break;
                case /* uint64 scene_time_ms */ 8:
                    message.sceneTimeMs = reader.uint64().toBigInt();
                    break;
                case /* uint32 Unk3300_NKHDFHAPNCN = 13 [json_name = "Unk3300NKHDFHAPNCN"];*/ 13:
                    message.unk3300NKHDFHAPNCN = reader.uint32();
                    break;
                case /* bool is_success */ 6:
                    message.isSuccess = reader.bool();
                    break;
                case /* uint32 Unk3300_EMNLLDJHMEI = 1 [json_name = "Unk3300EMNLLDJHMEI"];*/ 1:
                    message.unk3300EMNLLDJHMEI = reader.uint32();
                    break;
                case /* repeated ExhibitionDisplayInfo score_list */ 4:
                    message.scoreList.push(ExhibitionDisplayInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_IPGILJCBABK = 2 [json_name = "Unk3300IPGILJCBABK"];*/ 2:
                    message.unk3300IPGILJCBABK = reader.uint32();
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
    internalBinaryWrite(message: InBattleChessSettleInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 Unk3300_LPANFEBFJOJ = 5 [json_name = "Unk3300LPANFEBFJOJ"]; */
        if (message.unk3300LPANFEBFJOJ !== 0)
            writer.tag(5, WireType.Varint).uint32(message.unk3300LPANFEBFJOJ);
        /* uint64 scene_time_ms = 8; */
        if (message.sceneTimeMs !== 0n)
            writer.tag(8, WireType.Varint).uint64(message.sceneTimeMs);
        /* uint32 Unk3300_NKHDFHAPNCN = 13 [json_name = "Unk3300NKHDFHAPNCN"]; */
        if (message.unk3300NKHDFHAPNCN !== 0)
            writer.tag(13, WireType.Varint).uint32(message.unk3300NKHDFHAPNCN);
        /* bool is_success = 6; */
        if (message.isSuccess !== false)
            writer.tag(6, WireType.Varint).bool(message.isSuccess);
        /* uint32 Unk3300_EMNLLDJHMEI = 1 [json_name = "Unk3300EMNLLDJHMEI"]; */
        if (message.unk3300EMNLLDJHMEI !== 0)
            writer.tag(1, WireType.Varint).uint32(message.unk3300EMNLLDJHMEI);
        /* repeated ExhibitionDisplayInfo score_list = 4; */
        for (let i = 0; i < message.scoreList.length; i++)
            ExhibitionDisplayInfo.internalBinaryWrite(message.scoreList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_IPGILJCBABK = 2 [json_name = "Unk3300IPGILJCBABK"]; */
        if (message.unk3300IPGILJCBABK !== 0)
            writer.tag(2, WireType.Varint).uint32(message.unk3300IPGILJCBABK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleChessSettleInfo
 */
export const InBattleChessSettleInfo = new InBattleChessSettleInfo$Type();
