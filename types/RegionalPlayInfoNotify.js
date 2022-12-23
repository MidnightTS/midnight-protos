"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionalPlayInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const RegionalPlayVar_1 = require("./RegionalPlayVar");
// @generated message type with reflection information, may provide speed optimized methods
class RegionalPlayInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("RegionalPlayInfoNotify", [
            { no: 3, name: "play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "var_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RegionalPlayVar_1.RegionalPlayVar },
            { no: 5, name: "play_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1, name: "is_enabled", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 14, name: "is_in_region", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { playType: 0, varList: [], playName: "", isEnabled: false, isInRegion: false };
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
                case /* uint32 play_type */ 3:
                    message.playType = reader.uint32();
                    break;
                case /* repeated RegionalPlayVar var_list */ 13:
                    message.varList.push(RegionalPlayVar_1.RegionalPlayVar.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string play_name */ 5:
                    message.playName = reader.string();
                    break;
                case /* bool is_enabled */ 1:
                    message.isEnabled = reader.bool();
                    break;
                case /* bool is_in_region */ 14:
                    message.isInRegion = reader.bool();
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
        /* uint32 play_type = 3; */
        if (message.playType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.playType);
        /* repeated RegionalPlayVar var_list = 13; */
        for (let i = 0; i < message.varList.length; i++)
            RegionalPlayVar_1.RegionalPlayVar.internalBinaryWrite(message.varList[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string play_name = 5; */
        if (message.playName !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.playName);
        /* bool is_enabled = 1; */
        if (message.isEnabled !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.isEnabled);
        /* bool is_in_region = 14; */
        if (message.isInRegion !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isInRegion);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message RegionalPlayInfoNotify
 */
exports.RegionalPlayInfoNotify = new RegionalPlayInfoNotify$Type();
