"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinWindSeedSpawner_CatchSeed = exports.AbilityMixinWindSeedSpawner_RefreshSeed = exports.AbilityMixinWindSeedSpawner_AddSignal = exports.AbilityMixinWindSeedSpawner = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinWindSeedSpawner", [
            { no: 8, name: "add_signal", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_AddSignal },
            { no: 12, name: "refresh_seed", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_RefreshSeed },
            { no: 14, name: "catch_seed", kind: "message", oneof: "cmd", T: () => exports.AbilityMixinWindSeedSpawner_CatchSeed }
        ]);
    }
    create(value) {
        const message = { cmd: { oneofKind: undefined } };
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
                case /* AbilityMixinWindSeedSpawner.AddSignal add_signal */ 8:
                    message.cmd = {
                        oneofKind: "addSignal",
                        addSignal: exports.AbilityMixinWindSeedSpawner_AddSignal.internalBinaryRead(reader, reader.uint32(), options, message.cmd.addSignal)
                    };
                    break;
                case /* AbilityMixinWindSeedSpawner.RefreshSeed refresh_seed */ 12:
                    message.cmd = {
                        oneofKind: "refreshSeed",
                        refreshSeed: exports.AbilityMixinWindSeedSpawner_RefreshSeed.internalBinaryRead(reader, reader.uint32(), options, message.cmd.refreshSeed)
                    };
                    break;
                case /* AbilityMixinWindSeedSpawner.CatchSeed catch_seed */ 14:
                    message.cmd = {
                        oneofKind: "catchSeed",
                        catchSeed: exports.AbilityMixinWindSeedSpawner_CatchSeed.internalBinaryRead(reader, reader.uint32(), options, message.cmd.catchSeed)
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
        /* AbilityMixinWindSeedSpawner.AddSignal add_signal = 8; */
        if (message.cmd.oneofKind === "addSignal")
            exports.AbilityMixinWindSeedSpawner_AddSignal.internalBinaryWrite(message.cmd.addSignal, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityMixinWindSeedSpawner.RefreshSeed refresh_seed = 12; */
        if (message.cmd.oneofKind === "refreshSeed")
            exports.AbilityMixinWindSeedSpawner_RefreshSeed.internalBinaryWrite(message.cmd.refreshSeed, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* AbilityMixinWindSeedSpawner.CatchSeed catch_seed = 14; */
        if (message.cmd.oneofKind === "catchSeed")
            exports.AbilityMixinWindSeedSpawner_CatchSeed.internalBinaryWrite(message.cmd.catchSeed, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinWindSeedSpawner
 */
exports.AbilityMixinWindSeedSpawner = new AbilityMixinWindSeedSpawner$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_AddSignal$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinWindSeedSpawner.AddSignal", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinWindSeedSpawner.AddSignal
 */
exports.AbilityMixinWindSeedSpawner_AddSignal = new AbilityMixinWindSeedSpawner_AddSignal$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_RefreshSeed$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinWindSeedSpawner.RefreshSeed", [
            { no: 10, name: "pos_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { posList: [] };
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
                case /* repeated Vector pos_list */ 10:
                    message.posList.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated Vector pos_list = 10; */
        for (let i = 0; i < message.posList.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.posList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinWindSeedSpawner.RefreshSeed
 */
exports.AbilityMixinWindSeedSpawner_RefreshSeed = new AbilityMixinWindSeedSpawner_RefreshSeed$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinWindSeedSpawner_CatchSeed$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinWindSeedSpawner.CatchSeed", [
            { no: 13, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { entityId: 0 };
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
                case /* uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
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
        /* uint32 entity_id = 13; */
        if (message.entityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinWindSeedSpawner.CatchSeed
 */
exports.AbilityMixinWindSeedSpawner_CatchSeed = new AbilityMixinWindSeedSpawner_CatchSeed$Type();
