// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "MaterialDeleteInfo.proto" (syntax proto3)
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
/**
 * @generated from protobuf message MaterialDeleteInfo
 */
export interface MaterialDeleteInfo {
    /**
     * @generated from protobuf field: bool has_delete_config = 1;
     */
    hasDeleteConfig: boolean;
    /**
     * @generated from protobuf oneof: delete_info
     */
    deleteInfo: {
        oneofKind: "countDownDelete";
        /**
         * @generated from protobuf field: MaterialDeleteInfo.CountDownDelete count_down_delete = 2;
         */
        countDownDelete: MaterialDeleteInfo_CountDownDelete;
    } | {
        oneofKind: "dateDelete";
        /**
         * @generated from protobuf field: MaterialDeleteInfo.DateTimeDelete date_delete = 3;
         */
        dateDelete: MaterialDeleteInfo_DateTimeDelete;
    } | {
        oneofKind: "delayWeekCountDownDelete";
        /**
         * @generated from protobuf field: MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete = 4;
         */
        delayWeekCountDownDelete: MaterialDeleteInfo_DelayWeekCountDownDelete;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message MaterialDeleteInfo.CountDownDelete
 */
export interface MaterialDeleteInfo_CountDownDelete {
    /**
     * @generated from protobuf field: map<uint32, uint32> delete_time_num_map = 1;
     */
    deleteTimeNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 config_count_down_time = 2;
     */
    configCountDownTime: number;
}
/**
 * @generated from protobuf message MaterialDeleteInfo.DateTimeDelete
 */
export interface MaterialDeleteInfo_DateTimeDelete {
    /**
     * @generated from protobuf field: uint32 delete_time = 1;
     */
    deleteTime: number;
}
/**
 * @generated from protobuf message MaterialDeleteInfo.DelayWeekCountDownDelete
 */
export interface MaterialDeleteInfo_DelayWeekCountDownDelete {
    /**
     * @generated from protobuf field: map<uint32, uint32> delete_time_num_map = 1;
     */
    deleteTimeNumMap: {
        [key: number]: number;
    };
    /**
     * @generated from protobuf field: uint32 config_delay_week = 2;
     */
    configDelayWeek: number;
    /**
     * @generated from protobuf field: uint32 config_count_down_time = 3;
     */
    configCountDownTime: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo$Type extends MessageType<MaterialDeleteInfo> {
    constructor() {
        super("MaterialDeleteInfo", [
            { no: 1, name: "has_delete_config", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "count_down_delete", kind: "message", oneof: "deleteInfo", T: () => MaterialDeleteInfo_CountDownDelete },
            { no: 3, name: "date_delete", kind: "message", oneof: "deleteInfo", T: () => MaterialDeleteInfo_DateTimeDelete },
            { no: 4, name: "delay_week_count_down_delete", kind: "message", oneof: "deleteInfo", T: () => MaterialDeleteInfo_DelayWeekCountDownDelete }
        ]);
    }
    create(value?: PartialMessage<MaterialDeleteInfo>): MaterialDeleteInfo {
        const message = { hasDeleteConfig: false, deleteInfo: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MaterialDeleteInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaterialDeleteInfo): MaterialDeleteInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool has_delete_config */ 1:
                    message.hasDeleteConfig = reader.bool();
                    break;
                case /* MaterialDeleteInfo.CountDownDelete count_down_delete */ 2:
                    message.deleteInfo = {
                        oneofKind: "countDownDelete",
                        countDownDelete: MaterialDeleteInfo_CountDownDelete.internalBinaryRead(reader, reader.uint32(), options, (message.deleteInfo as any).countDownDelete)
                    };
                    break;
                case /* MaterialDeleteInfo.DateTimeDelete date_delete */ 3:
                    message.deleteInfo = {
                        oneofKind: "dateDelete",
                        dateDelete: MaterialDeleteInfo_DateTimeDelete.internalBinaryRead(reader, reader.uint32(), options, (message.deleteInfo as any).dateDelete)
                    };
                    break;
                case /* MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete */ 4:
                    message.deleteInfo = {
                        oneofKind: "delayWeekCountDownDelete",
                        delayWeekCountDownDelete: MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryRead(reader, reader.uint32(), options, (message.deleteInfo as any).delayWeekCountDownDelete)
                    };
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
    internalBinaryWrite(message: MaterialDeleteInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool has_delete_config = 1; */
        if (message.hasDeleteConfig !== false)
            writer.tag(1, WireType.Varint).bool(message.hasDeleteConfig);
        /* MaterialDeleteInfo.CountDownDelete count_down_delete = 2; */
        if (message.deleteInfo.oneofKind === "countDownDelete")
            MaterialDeleteInfo_CountDownDelete.internalBinaryWrite(message.deleteInfo.countDownDelete, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* MaterialDeleteInfo.DateTimeDelete date_delete = 3; */
        if (message.deleteInfo.oneofKind === "dateDelete")
            MaterialDeleteInfo_DateTimeDelete.internalBinaryWrite(message.deleteInfo.dateDelete, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* MaterialDeleteInfo.DelayWeekCountDownDelete delay_week_count_down_delete = 4; */
        if (message.deleteInfo.oneofKind === "delayWeekCountDownDelete")
            MaterialDeleteInfo_DelayWeekCountDownDelete.internalBinaryWrite(message.deleteInfo.delayWeekCountDownDelete, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo
 */
export const MaterialDeleteInfo = new MaterialDeleteInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_CountDownDelete$Type extends MessageType<MaterialDeleteInfo_CountDownDelete> {
    constructor() {
        super("MaterialDeleteInfo.CountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_count_down_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MaterialDeleteInfo_CountDownDelete>): MaterialDeleteInfo_CountDownDelete {
        const message = { deleteTimeNumMap: {}, configCountDownTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MaterialDeleteInfo_CountDownDelete>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaterialDeleteInfo_CountDownDelete): MaterialDeleteInfo_CountDownDelete {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* uint32 config_count_down_time */ 2:
                    message.configCountDownTime = reader.uint32();
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
    private binaryReadMap1(map: MaterialDeleteInfo_CountDownDelete["deleteTimeNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MaterialDeleteInfo_CountDownDelete["deleteTimeNumMap"] | undefined, val: MaterialDeleteInfo_CountDownDelete["deleteTimeNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteInfo.CountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: MaterialDeleteInfo_CountDownDelete, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.deleteTimeNumMap[k as any]).join();
        /* uint32 config_count_down_time = 2; */
        if (message.configCountDownTime !== 0)
            writer.tag(2, WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.CountDownDelete
 */
export const MaterialDeleteInfo_CountDownDelete = new MaterialDeleteInfo_CountDownDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DateTimeDelete$Type extends MessageType<MaterialDeleteInfo_DateTimeDelete> {
    constructor() {
        super("MaterialDeleteInfo.DateTimeDelete", [
            { no: 1, name: "delete_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MaterialDeleteInfo_DateTimeDelete>): MaterialDeleteInfo_DateTimeDelete {
        const message = { deleteTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MaterialDeleteInfo_DateTimeDelete>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaterialDeleteInfo_DateTimeDelete): MaterialDeleteInfo_DateTimeDelete {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 delete_time */ 1:
                    message.deleteTime = reader.uint32();
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
    internalBinaryWrite(message: MaterialDeleteInfo_DateTimeDelete, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 delete_time = 1; */
        if (message.deleteTime !== 0)
            writer.tag(1, WireType.Varint).uint32(message.deleteTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.DateTimeDelete
 */
export const MaterialDeleteInfo_DateTimeDelete = new MaterialDeleteInfo_DateTimeDelete$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MaterialDeleteInfo_DelayWeekCountDownDelete$Type extends MessageType<MaterialDeleteInfo_DelayWeekCountDownDelete> {
    constructor() {
        super("MaterialDeleteInfo.DelayWeekCountDownDelete", [
            { no: 1, name: "delete_time_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 2, name: "config_delay_week", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "config_count_down_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<MaterialDeleteInfo_DelayWeekCountDownDelete>): MaterialDeleteInfo_DelayWeekCountDownDelete {
        const message = { deleteTimeNumMap: {}, configDelayWeek: 0, configCountDownTime: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<MaterialDeleteInfo_DelayWeekCountDownDelete>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaterialDeleteInfo_DelayWeekCountDownDelete): MaterialDeleteInfo_DelayWeekCountDownDelete {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<uint32, uint32> delete_time_num_map */ 1:
                    this.binaryReadMap1(message.deleteTimeNumMap, reader, options);
                    break;
                case /* uint32 config_delay_week */ 2:
                    message.configDelayWeek = reader.uint32();
                    break;
                case /* uint32 config_count_down_time */ 3:
                    message.configCountDownTime = reader.uint32();
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
    private binaryReadMap1(map: MaterialDeleteInfo_DelayWeekCountDownDelete["deleteTimeNumMap"], reader: IBinaryReader, options: BinaryReadOptions): void {
        let len = reader.uint32(), end = reader.pos + len, key: keyof MaterialDeleteInfo_DelayWeekCountDownDelete["deleteTimeNumMap"] | undefined, val: MaterialDeleteInfo_DelayWeekCountDownDelete["deleteTimeNumMap"][any] | undefined;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MaterialDeleteInfo.DelayWeekCountDownDelete.delete_time_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message: MaterialDeleteInfo_DelayWeekCountDownDelete, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* map<uint32, uint32> delete_time_num_map = 1; */
        for (let k of Object.keys(message.deleteTimeNumMap))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.Varint).uint32(parseInt(k)).tag(2, WireType.Varint).uint32(message.deleteTimeNumMap[k as any]).join();
        /* uint32 config_delay_week = 2; */
        if (message.configDelayWeek !== 0)
            writer.tag(2, WireType.Varint).uint32(message.configDelayWeek);
        /* uint32 config_count_down_time = 3; */
        if (message.configCountDownTime !== 0)
            writer.tag(3, WireType.Varint).uint32(message.configCountDownTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MaterialDeleteInfo.DelayWeekCountDownDelete
 */
export const MaterialDeleteInfo_DelayWeekCountDownDelete = new MaterialDeleteInfo_DelayWeekCountDownDelete$Type();
