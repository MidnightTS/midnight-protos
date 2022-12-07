// @generated by protobuf-ts 2.8.1 with parameter output_typescript
// @generated from protobuf file "CodexTypeData.proto" (syntax proto3)
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
import { CodexType } from "./CodexType";
/**
 * @generated from protobuf message CodexTypeData
 */
export interface CodexTypeData {
    /**
     * @generated from protobuf field: repeated bool have_viewed_list = 13;
     */
    haveViewedList: boolean[];
    /**
     * @generated from protobuf field: repeated uint32 codex_id_list = 9;
     */
    codexIdList: number[];
    /**
     * @generated from protobuf field: map<uint32, uint32> weapon_max_promote_level_map = 12;
     */
    weaponMaxPromoteLevelMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: CodexType type = 14;
     */
    type: CodexType;
}
// @generated message type with reflection information, may provide speed optimized methods
class CodexTypeData$Type extends MessageType<CodexTypeData> {
    constructor() {
        super("CodexTypeData", [
            { no: 13, name: "have_viewed_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "codex_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "weapon_max_promote_level_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "type", kind: "enum", T: () => ["CodexType", CodexType, "CODEX_TYPE_"] }
        ]);
    }
    create(value?: PartialMessage<CodexTypeData>): CodexTypeData {
        const message = { haveViewedList: [], codexIdList: [], weaponMaxPromoteLevelMap: {}, type: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<CodexTypeData>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CodexTypeData): CodexTypeData {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated bool have_viewed_list */ 13:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.haveViewedList.push(reader.bool());
                    else
                        message.haveViewedList.push(reader.bool());
                    break;
                case /* repeated uint32 codex_id_list */ 9:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.codexIdList.push(reader.uint32());
                    else
                        message.codexIdList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> weapon_max_promote_level_map */ 12:
                    this.binaryReadMap12(message.weaponMaxPromoteLevelMap, reader, options);
                    break;
                case /* CodexType type */ 14:
                    message.type = reader.int32();
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
    private binaryReadMap12(map: CodexTypeData["weaponMaxPromoteLevelMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof CodexTypeData["weaponMaxPromoteLevelMap"] | undefined, val: CodexTypeData["weaponMaxPromoteLevelMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field CodexTypeData.weapon_max_promote_level_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: CodexTypeData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated bool have_viewed_list = 13; */
        if (message.haveViewedList.length) {
            writer.tag(13, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.haveViewedList.length; i++)
                writer.bool(message.haveViewedList[i]);
            writer.join();
        }
        /* repeated uint32 codex_id_list = 9; */
        if (message.codexIdList.length) {
            writer.tag(9, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.codexIdList.length; i++)
                writer.uint32(message.codexIdList[i]);
            writer.join();
        }
        /* map<uint32, uint32> weapon_max_promote_level_map = 12; */
        for (let k of Object.keys(message.weaponMaxPromoteLevelMap))
            writer.tag(12, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.weaponMaxPromoteLevelMap[k as any]).join();
        /* CodexType type = 14; */
        if (message.type !== 0)
            writer.tag(14, WireType.Varint).int32(message.type);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CodexTypeData
 */
export const CodexTypeData = new CodexTypeData$Type();
