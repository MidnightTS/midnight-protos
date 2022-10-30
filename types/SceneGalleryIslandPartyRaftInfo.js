"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SceneGalleryIslandPartyRaftInfo_one_of_decls;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneGalleryIslandPartyRaftInfo = void 0;
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.20.3
 * source: SceneGalleryIslandPartyRaftInfo.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
const dependency_1 = require("./Unk2800_FMAOEPEBKHB");
const pb_1 = require("google-protobuf");
class SceneGalleryIslandPartyRaftInfo extends pb_1.Message {
    constructor(data) {
        super();
        _SceneGalleryIslandPartyRaftInfo_one_of_decls.set(this, []);
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], __classPrivateFieldGet(this, _SceneGalleryIslandPartyRaftInfo_one_of_decls, "f"));
        if (!Array.isArray(data) && typeof data == "object") {
            if ("coin" in data && data.coin != undefined) {
                this.coin = data.coin;
            }
            if ("Unk2800_ENJGEFBCLOL" in data && data.Unk2800_ENJGEFBCLOL != undefined) {
                this.Unk2800_ENJGEFBCLOL = data.Unk2800_ENJGEFBCLOL;
            }
            if ("Unk2800_BAEEDEAADIA" in data && data.Unk2800_BAEEDEAADIA != undefined) {
                this.Unk2800_BAEEDEAADIA = data.Unk2800_BAEEDEAADIA;
            }
            if ("Unk2800_EOFOECJJMLJ" in data && data.Unk2800_EOFOECJJMLJ != undefined) {
                this.Unk2800_EOFOECJJMLJ = data.Unk2800_EOFOECJJMLJ;
            }
            if ("point_id" in data && data.point_id != undefined) {
                this.point_id = data.point_id;
            }
            if ("Unk2800_MKNGANDAJFJ" in data && data.Unk2800_MKNGANDAJFJ != undefined) {
                this.Unk2800_MKNGANDAJFJ = data.Unk2800_MKNGANDAJFJ;
            }
        }
    }
    get coin() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0);
    }
    set coin(value) {
        pb_1.Message.setField(this, 6, value);
    }
    get Unk2800_ENJGEFBCLOL() {
        return pb_1.Message.getFieldWithDefault(this, 7, dependency_1.Unk2800_FMAOEPEBKHB.Unk2800_FMAOEPEBKHB_Unk2800_IBMPPHFLKEO);
    }
    set Unk2800_ENJGEFBCLOL(value) {
        pb_1.Message.setField(this, 7, value);
    }
    get Unk2800_BAEEDEAADIA() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0);
    }
    set Unk2800_BAEEDEAADIA(value) {
        pb_1.Message.setField(this, 1, value);
    }
    get Unk2800_EOFOECJJMLJ() {
        return pb_1.Message.getFieldWithDefault(this, 15, 0);
    }
    set Unk2800_EOFOECJJMLJ(value) {
        pb_1.Message.setField(this, 15, value);
    }
    get point_id() {
        return pb_1.Message.getFieldWithDefault(this, 12, 0);
    }
    set point_id(value) {
        pb_1.Message.setField(this, 12, value);
    }
    get Unk2800_MKNGANDAJFJ() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0);
    }
    set Unk2800_MKNGANDAJFJ(value) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data) {
        const message = new SceneGalleryIslandPartyRaftInfo({});
        if (data.coin != null) {
            message.coin = data.coin;
        }
        if (data.Unk2800_ENJGEFBCLOL != null) {
            message.Unk2800_ENJGEFBCLOL = data.Unk2800_ENJGEFBCLOL;
        }
        if (data.Unk2800_BAEEDEAADIA != null) {
            message.Unk2800_BAEEDEAADIA = data.Unk2800_BAEEDEAADIA;
        }
        if (data.Unk2800_EOFOECJJMLJ != null) {
            message.Unk2800_EOFOECJJMLJ = data.Unk2800_EOFOECJJMLJ;
        }
        if (data.point_id != null) {
            message.point_id = data.point_id;
        }
        if (data.Unk2800_MKNGANDAJFJ != null) {
            message.Unk2800_MKNGANDAJFJ = data.Unk2800_MKNGANDAJFJ;
        }
        return message;
    }
    toObject() {
        const data = {};
        if (this.coin != null) {
            data.coin = this.coin;
        }
        if (this.Unk2800_ENJGEFBCLOL != null) {
            data.Unk2800_ENJGEFBCLOL = this.Unk2800_ENJGEFBCLOL;
        }
        if (this.Unk2800_BAEEDEAADIA != null) {
            data.Unk2800_BAEEDEAADIA = this.Unk2800_BAEEDEAADIA;
        }
        if (this.Unk2800_EOFOECJJMLJ != null) {
            data.Unk2800_EOFOECJJMLJ = this.Unk2800_EOFOECJJMLJ;
        }
        if (this.point_id != null) {
            data.point_id = this.point_id;
        }
        if (this.Unk2800_MKNGANDAJFJ != null) {
            data.Unk2800_MKNGANDAJFJ = this.Unk2800_MKNGANDAJFJ;
        }
        return data;
    }
    serialize(w) {
        const writer = w || new pb_1.BinaryWriter();
        if (this.coin != 0)
            writer.writeUint32(6, this.coin);
        if (this.Unk2800_ENJGEFBCLOL != dependency_1.Unk2800_FMAOEPEBKHB.Unk2800_FMAOEPEBKHB_Unk2800_IBMPPHFLKEO)
            writer.writeEnum(7, this.Unk2800_ENJGEFBCLOL);
        if (this.Unk2800_BAEEDEAADIA != 0)
            writer.writeUint32(1, this.Unk2800_BAEEDEAADIA);
        if (this.Unk2800_EOFOECJJMLJ != 0)
            writer.writeUint32(15, this.Unk2800_EOFOECJJMLJ);
        if (this.point_id != 0)
            writer.writeUint32(12, this.point_id);
        if (this.Unk2800_MKNGANDAJFJ != 0)
            writer.writeUint32(4, this.Unk2800_MKNGANDAJFJ);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes) {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SceneGalleryIslandPartyRaftInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 6:
                    message.coin = reader.readUint32();
                    break;
                case 7:
                    message.Unk2800_ENJGEFBCLOL = reader.readEnum();
                    break;
                case 1:
                    message.Unk2800_BAEEDEAADIA = reader.readUint32();
                    break;
                case 15:
                    message.Unk2800_EOFOECJJMLJ = reader.readUint32();
                    break;
                case 12:
                    message.point_id = reader.readUint32();
                    break;
                case 4:
                    message.Unk2800_MKNGANDAJFJ = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary() {
        return this.serialize();
    }
    static deserializeBinary(bytes) {
        return SceneGalleryIslandPartyRaftInfo.deserialize(bytes);
    }
}
exports.SceneGalleryIslandPartyRaftInfo = SceneGalleryIslandPartyRaftInfo;
_SceneGalleryIslandPartyRaftInfo_one_of_decls = new WeakMap();