"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelerSlabChallenge = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChannelerSlabCamp_1 = require("./ChannelerSlabCamp");
// @generated message type with reflection information, may provide speed optimized methods
class ChannelerSlabChallenge$Type extends runtime_5.MessageType {
    constructor() {
        super("ChannelerSlabChallenge", [
            { no: 1, name: "active_camp_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "camp_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChannelerSlabCamp_1.ChannelerSlabCamp }
        ]);
    }
    create(value) {
        const message = { activeCampIndex: 0, campList: [] };
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
                case /* uint32 active_camp_index */ 1:
                    message.activeCampIndex = reader.uint32();
                    break;
                case /* repeated ChannelerSlabCamp camp_list */ 14:
                    message.campList.push(ChannelerSlabCamp_1.ChannelerSlabCamp.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 active_camp_index = 1; */
        if (message.activeCampIndex !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.activeCampIndex);
        /* repeated ChannelerSlabCamp camp_list = 14; */
        for (let i = 0; i < message.campList.length; i++)
            ChannelerSlabCamp_1.ChannelerSlabCamp.internalBinaryWrite(message.campList[i], writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChannelerSlabChallenge
 */
exports.ChannelerSlabChallenge = new ChannelerSlabChallenge$Type();
