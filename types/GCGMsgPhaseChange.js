"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGMsgPhaseChange = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Uint32Pair_1 = require("./Uint32Pair");
const GCGPhaseType_1 = require("./GCGPhaseType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGMsgPhaseChange$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGMsgPhaseChange", [
            { no: 15, name: "before_phase", kind: "enum", T: () => ["GCGPhaseType", GCGPhaseType_1.GCGPhaseType] },
            { no: 3, name: "after_phase", kind: "enum", T: () => ["GCGPhaseType", GCGPhaseType_1.GCGPhaseType] },
            { no: 11, name: "allow_controller_map", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Uint32Pair_1.Uint32Pair }
        ]);
    }
    create(value) {
        const message = { beforePhase: 0, afterPhase: 0, allowControllerMap: [] };
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
                case /* GCGPhaseType before_phase */ 15:
                    message.beforePhase = reader.int32();
                    break;
                case /* GCGPhaseType after_phase */ 3:
                    message.afterPhase = reader.int32();
                    break;
                case /* repeated Uint32Pair allow_controller_map */ 11:
                    message.allowControllerMap.push(Uint32Pair_1.Uint32Pair.internalBinaryRead(reader, reader.uint32(), options));
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
        /* GCGPhaseType before_phase = 15; */
        if (message.beforePhase !== 0)
            writer.tag(15, runtime_1.WireType.Varint).int32(message.beforePhase);
        /* GCGPhaseType after_phase = 3; */
        if (message.afterPhase !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.afterPhase);
        /* repeated Uint32Pair allow_controller_map = 11; */
        for (let i = 0; i < message.allowControllerMap.length; i++)
            Uint32Pair_1.Uint32Pair.internalBinaryWrite(message.allowControllerMap[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGMsgPhaseChange
 */
exports.GCGMsgPhaseChange = new GCGMsgPhaseChange$Type();
