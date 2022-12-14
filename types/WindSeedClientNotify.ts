// @generated by protobuf-ts 2.8.2 with parameter output_typescript
// @generated from protobuf file "WindSeedClientNotify.proto" (syntax proto3)
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
import { Vector } from "./Vector";
/**
 * enum CmdId {
 *   option allow_alias = true;
 *   NONE = 0;
 *   CMD_ID = 1157;
 *   ENET_CHANNEL_ID = 0;
 *   ENET_IS_RELIABLE = 1;
 * }
 *
 * @generated from protobuf message WindSeedClientNotify
 */
export interface WindSeedClientNotify {
    /**
     * @generated from protobuf oneof: notify
     */
    notify: {
        oneofKind: "refreshNotify";
        /**
         * @generated from protobuf field: WindSeedClientNotify.RefreshNotify refresh_notify = 14;
         */
        refreshNotify: WindSeedClientNotify_RefreshNotify;
    } | {
        oneofKind: "addWindBulletNotify";
        /**
         * @generated from protobuf field: WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify = 7;
         */
        addWindBulletNotify: WindSeedClientNotify_AddWindBulletNotify;
    } | {
        oneofKind: "areaNotify";
        /**
         * @generated from protobuf field: WindSeedClientNotify.AreaNotify area_notify = 5;
         */
        areaNotify: WindSeedClientNotify_AreaNotify;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message WindSeedClientNotify.RefreshNotify
 */
export interface WindSeedClientNotify_RefreshNotify {
    /**
     * @generated from protobuf field: uint32 refresh_num = 7;
     */
    refreshNum: number;
}
/**
 * @generated from protobuf message WindSeedClientNotify.AddWindBulletNotify
 */
export interface WindSeedClientNotify_AddWindBulletNotify {
    /**
     * @generated from protobuf field: Vector seed_pos = 14;
     */
    seedPos?: Vector;
    /**
     * @generated from protobuf field: uint32 Unk3300_CKIKKCAFJBC = 7 [json_name = "Unk3300CKIKKCAFJBC"];
     */
    unk3300CKIKKCAFJBC: number;
    /**
     * @generated from protobuf field: uint32 Unk3300_MPDFAPBDJAH = 11 [json_name = "Unk3300MPDFAPBDJAH"];
     */
    unk3300MPDFAPBDJAH: number;
}
/**
 * @generated from protobuf message WindSeedClientNotify.AreaNotify
 */
export interface WindSeedClientNotify_AreaNotify {
    /**
     * @generated from protobuf field: uint32 area_id = 12;
     */
    areaId: number;
    /**
     * @generated from protobuf field: bytes area_code = 10;
     */
    areaCode: Uint8Array;
    /**
     * @generated from protobuf field: uint32 area_type = 13;
     */
    areaType: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify$Type extends MessageType<WindSeedClientNotify> {
    constructor() {
        super("WindSeedClientNotify", [
            { no: 14, name: "refresh_notify", kind: "message", oneof: "notify", T: () => WindSeedClientNotify_RefreshNotify },
            { no: 7, name: "add_wind_bullet_notify", kind: "message", oneof: "notify", T: () => WindSeedClientNotify_AddWindBulletNotify },
            { no: 5, name: "area_notify", kind: "message", oneof: "notify", T: () => WindSeedClientNotify_AreaNotify }
        ]);
    }
    create(value?: PartialMessage<WindSeedClientNotify>): WindSeedClientNotify {
        const message = { notify: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WindSeedClientNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WindSeedClientNotify): WindSeedClientNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* WindSeedClientNotify.RefreshNotify refresh_notify */ 14:
                    message.notify = {
                        oneofKind: "refreshNotify",
                        refreshNotify: WindSeedClientNotify_RefreshNotify.internalBinaryRead(reader, reader.uint32(), options, (message.notify as any).refreshNotify)
                    };
                    break;
                case /* WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify */ 7:
                    message.notify = {
                        oneofKind: "addWindBulletNotify",
                        addWindBulletNotify: WindSeedClientNotify_AddWindBulletNotify.internalBinaryRead(reader, reader.uint32(), options, (message.notify as any).addWindBulletNotify)
                    };
                    break;
                case /* WindSeedClientNotify.AreaNotify area_notify */ 5:
                    message.notify = {
                        oneofKind: "areaNotify",
                        areaNotify: WindSeedClientNotify_AreaNotify.internalBinaryRead(reader, reader.uint32(), options, (message.notify as any).areaNotify)
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
    internalBinaryWrite(message: WindSeedClientNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* WindSeedClientNotify.RefreshNotify refresh_notify = 14; */
        if (message.notify.oneofKind === "refreshNotify")
            WindSeedClientNotify_RefreshNotify.internalBinaryWrite(message.notify.refreshNotify, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify = 7; */
        if (message.notify.oneofKind === "addWindBulletNotify")
            WindSeedClientNotify_AddWindBulletNotify.internalBinaryWrite(message.notify.addWindBulletNotify, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* WindSeedClientNotify.AreaNotify area_notify = 5; */
        if (message.notify.oneofKind === "areaNotify")
            WindSeedClientNotify_AreaNotify.internalBinaryWrite(message.notify.areaNotify, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify
 */
export const WindSeedClientNotify = new WindSeedClientNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_RefreshNotify$Type extends MessageType<WindSeedClientNotify_RefreshNotify> {
    constructor() {
        super("WindSeedClientNotify.RefreshNotify", [
            { no: 7, name: "refresh_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WindSeedClientNotify_RefreshNotify>): WindSeedClientNotify_RefreshNotify {
        const message = { refreshNum: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WindSeedClientNotify_RefreshNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WindSeedClientNotify_RefreshNotify): WindSeedClientNotify_RefreshNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 refresh_num */ 7:
                    message.refreshNum = reader.uint32();
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
    internalBinaryWrite(message: WindSeedClientNotify_RefreshNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 refresh_num = 7; */
        if (message.refreshNum !== 0)
            writer.tag(7, WireType.Varint).uint32(message.refreshNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.RefreshNotify
 */
export const WindSeedClientNotify_RefreshNotify = new WindSeedClientNotify_RefreshNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AddWindBulletNotify$Type extends MessageType<WindSeedClientNotify_AddWindBulletNotify> {
    constructor() {
        super("WindSeedClientNotify.AddWindBulletNotify", [
            { no: 14, name: "seed_pos", kind: "message", T: () => Vector },
            { no: 7, name: "Unk3300_CKIKKCAFJBC", kind: "scalar", jsonName: "Unk3300CKIKKCAFJBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_MPDFAPBDJAH", kind: "scalar", jsonName: "Unk3300MPDFAPBDJAH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WindSeedClientNotify_AddWindBulletNotify>): WindSeedClientNotify_AddWindBulletNotify {
        const message = { unk3300CKIKKCAFJBC: 0, unk3300MPDFAPBDJAH: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WindSeedClientNotify_AddWindBulletNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WindSeedClientNotify_AddWindBulletNotify): WindSeedClientNotify_AddWindBulletNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector seed_pos */ 14:
                    message.seedPos = Vector.internalBinaryRead(reader, reader.uint32(), options, message.seedPos);
                    break;
                case /* uint32 Unk3300_CKIKKCAFJBC = 7 [json_name = "Unk3300CKIKKCAFJBC"];*/ 7:
                    message.unk3300CKIKKCAFJBC = reader.uint32();
                    break;
                case /* uint32 Unk3300_MPDFAPBDJAH = 11 [json_name = "Unk3300MPDFAPBDJAH"];*/ 11:
                    message.unk3300MPDFAPBDJAH = reader.uint32();
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
    internalBinaryWrite(message: WindSeedClientNotify_AddWindBulletNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* Vector seed_pos = 14; */
        if (message.seedPos)
            Vector.internalBinaryWrite(message.seedPos, writer.tag(14, WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_CKIKKCAFJBC = 7 [json_name = "Unk3300CKIKKCAFJBC"]; */
        if (message.unk3300CKIKKCAFJBC !== 0)
            writer.tag(7, WireType.Varint).uint32(message.unk3300CKIKKCAFJBC);
        /* uint32 Unk3300_MPDFAPBDJAH = 11 [json_name = "Unk3300MPDFAPBDJAH"]; */
        if (message.unk3300MPDFAPBDJAH !== 0)
            writer.tag(11, WireType.Varint).uint32(message.unk3300MPDFAPBDJAH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.AddWindBulletNotify
 */
export const WindSeedClientNotify_AddWindBulletNotify = new WindSeedClientNotify_AddWindBulletNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AreaNotify$Type extends MessageType<WindSeedClientNotify_AreaNotify> {
    constructor() {
        super("WindSeedClientNotify.AreaNotify", [
            { no: 12, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "area_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "area_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<WindSeedClientNotify_AreaNotify>): WindSeedClientNotify_AreaNotify {
        const message = { areaId: 0, areaCode: new Uint8Array(0), areaType: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<WindSeedClientNotify_AreaNotify>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WindSeedClientNotify_AreaNotify): WindSeedClientNotify_AreaNotify {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 area_id */ 12:
                    message.areaId = reader.uint32();
                    break;
                case /* bytes area_code */ 10:
                    message.areaCode = reader.bytes();
                    break;
                case /* uint32 area_type */ 13:
                    message.areaType = reader.uint32();
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
    internalBinaryWrite(message: WindSeedClientNotify_AreaNotify, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 area_id = 12; */
        if (message.areaId !== 0)
            writer.tag(12, WireType.Varint).uint32(message.areaId);
        /* bytes area_code = 10; */
        if (message.areaCode.length)
            writer.tag(10, WireType.LengthDelimited).bytes(message.areaCode);
        /* uint32 area_type = 13; */
        if (message.areaType !== 0)
            writer.tag(13, WireType.Varint).uint32(message.areaType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.AreaNotify
 */
export const WindSeedClientNotify_AreaNotify = new WindSeedClientNotify_AreaNotify$Type();
