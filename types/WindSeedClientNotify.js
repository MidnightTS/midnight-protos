"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindSeedClientNotify_AreaNotify = exports.WindSeedClientNotify_AddWindBulletNotify = exports.WindSeedClientNotify_RefreshNotify = exports.WindSeedClientNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindSeedClientNotify", [
            { no: 14, name: "refresh_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_RefreshNotify },
            { no: 7, name: "add_wind_bullet_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_AddWindBulletNotify },
            { no: 5, name: "area_notify", kind: "message", oneof: "notify", T: () => exports.WindSeedClientNotify_AreaNotify }
        ]);
    }
    create(value) {
        const message = { notify: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* WindSeedClientNotify.RefreshNotify refresh_notify */ 14:
                    message.notify = {
                        oneofKind: "refreshNotify",
                        refreshNotify: exports.WindSeedClientNotify_RefreshNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.refreshNotify)
                    };
                    break;
                case /* WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify */ 7:
                    message.notify = {
                        oneofKind: "addWindBulletNotify",
                        addWindBulletNotify: exports.WindSeedClientNotify_AddWindBulletNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.addWindBulletNotify)
                    };
                    break;
                case /* WindSeedClientNotify.AreaNotify area_notify */ 5:
                    message.notify = {
                        oneofKind: "areaNotify",
                        areaNotify: exports.WindSeedClientNotify_AreaNotify.internalBinaryRead(reader, reader.uint32(), options, message.notify.areaNotify)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* WindSeedClientNotify.RefreshNotify refresh_notify = 14; */
        if (message.notify.oneofKind === "refreshNotify")
            exports.WindSeedClientNotify_RefreshNotify.internalBinaryWrite(message.notify.refreshNotify, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WindSeedClientNotify.AddWindBulletNotify add_wind_bullet_notify = 7; */
        if (message.notify.oneofKind === "addWindBulletNotify")
            exports.WindSeedClientNotify_AddWindBulletNotify.internalBinaryWrite(message.notify.addWindBulletNotify, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* WindSeedClientNotify.AreaNotify area_notify = 5; */
        if (message.notify.oneofKind === "areaNotify")
            exports.WindSeedClientNotify_AreaNotify.internalBinaryWrite(message.notify.areaNotify, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify
 */
exports.WindSeedClientNotify = new WindSeedClientNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_RefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindSeedClientNotify.RefreshNotify", [
            { no: 7, name: "refresh_num", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { refreshNum: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 refresh_num = 7; */
        if (message.refreshNum !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.refreshNum);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.RefreshNotify
 */
exports.WindSeedClientNotify_RefreshNotify = new WindSeedClientNotify_RefreshNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AddWindBulletNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindSeedClientNotify.AddWindBulletNotify", [
            { no: 14, name: "seed_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 7, name: "Unk3300_CKIKKCAFJBC", kind: "scalar", jsonName: "Unk3300CKIKKCAFJBC", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "Unk3300_MPDFAPBDJAH", kind: "scalar", jsonName: "Unk3300MPDFAPBDJAH", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300CKIKKCAFJBC: 0, unk3300MPDFAPBDJAH: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector seed_pos */ 14:
                    message.seedPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.seedPos);
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Vector seed_pos = 14; */
        if (message.seedPos)
            Vector_1.Vector.internalBinaryWrite(message.seedPos, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_CKIKKCAFJBC = 7 [json_name = "Unk3300CKIKKCAFJBC"]; */
        if (message.unk3300CKIKKCAFJBC !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300CKIKKCAFJBC);
        /* uint32 Unk3300_MPDFAPBDJAH = 11 [json_name = "Unk3300MPDFAPBDJAH"]; */
        if (message.unk3300MPDFAPBDJAH !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.unk3300MPDFAPBDJAH);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.AddWindBulletNotify
 */
exports.WindSeedClientNotify_AddWindBulletNotify = new WindSeedClientNotify_AddWindBulletNotify$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WindSeedClientNotify_AreaNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WindSeedClientNotify.AreaNotify", [
            { no: 12, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "area_code", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 13, name: "area_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaId: 0, areaCode: new Uint8Array(0), areaType: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
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
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 area_id = 12; */
        if (message.areaId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.areaId);
        /* bytes area_code = 10; */
        if (message.areaCode.length)
            writer.tag(10, runtime_1.WireType.LengthDelimited).bytes(message.areaCode);
        /* uint32 area_type = 13; */
        if (message.areaType !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.areaType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WindSeedClientNotify.AreaNotify
 */
exports.WindSeedClientNotify_AreaNotify = new WindSeedClientNotify_AreaNotify$Type();
